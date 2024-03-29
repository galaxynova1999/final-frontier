---
title: 协同编辑-YATA算法
---



## 摘要

Near real-time collaboration using Web browsers is becoming rapidly more and more popular for many applications such as text editing, coding, sketching and others.These applications require reliable algorithms to ensure consistency among the participating Web clients.Operational Transformation (OT) and more recently Commutative Replicated Data Types (CRDT) have become widely adopted solutions for this kind of problem. 
However, most existing approaches are non-trivial and require trade-offs between expressiveness, suitable infrastructure, performance and simplicity. 
The ever-growing number of potential use cases, the new possibilities of cutting-edge messaging protocols that shaped the near real-time Web, and the use of N-way communication between clients (e.g. WebRTC), create a need for peer-to-peer algorithms that perform well and are not restricted to only a few supported data types. 
In this paper, we present YATA, an approach for peer-to-peer shared editing applications that ensures convergence, preserves user intentions, allows offline editing and can be utilized for arbitrary data types in the Web browser. 
Using Yjs, its open-source JavaScript library implementation, we have evaluated the performance and multiple usage of YATA in Web and mobile browsers, both on test and real-world data. 
The promising evaluation results as well as the uptake by many commercial vendors and open-source projects indicate a wide applicability of YATA.


使用Web浏览器的近实时协作在许多应用程序中变得越来越流行，如文本编辑、代码协同、草图绘制等。这些应用程序需要可靠的算法来确保参与的Web客户端之间的一致性。

操作转换算法（OT）和最近流行的 交换复制数据类型算法（CRDT）已成为近实时协作问题广泛采用的解决方案。然而，大多数现有的方法都不是`万金油(non-trivial)`，需要在`表达能力(expressiveness)`、合适的基础设施、性能和简单性之间进行权衡(trade-offs)。

近实时的Web消息传递协议潜在用例的不断增加，以及客户端之间`N-way communication`（如WebRTC）的使用，使得对性能良好且不限于少数受支持数据类型的`P2P`算法的需求日益增加。

在本文中，我们介绍了`YATA`，这是一种用于`P2P`协同编辑的方法，它确保了收敛性，保留了用户意图，允许离线编辑(offline editing)，并可用于Web浏览器中的任意数据类型。

YATA算法的开源`JavaScript`库实现是`Yjs`。我们评估了YATA在Web和移动浏览器中的性能和多种使用情况，包括测试数据和真实数据。目前，很多的评估结果以及许多在许多商业应用和开源项目中的使用，表明YATA可以被广泛使用。

## 关键词Keywords

**Near real-time collaborative editing; commutative replicated data types; operational transformation; peer-to-peer information systems**

**近实时协同编辑; 交换复制数据类型(CRDT); 操作转化(OT)算法; P2P信息系统**

## 1 简介 INTRODUCTION

Near real-time (NRT) collaboration techniques have been intensively studied by the CSCW community during the past three decades [6, 30, 26, 29].
Mostly directed towards shared editing, highly relevant works include OT [6] algorithms and systems for enabling concurrent editing on the Web.
These approaches leverage optimistic and reliable concurrency control mechanisms that lead to widely adopted OT-based systems such as Google Docs.
A major advantage is that these systems do not require any locking mechanisms to ensure consistency of the shared data [10].
In a NRT setting, the user agents apply edits immediately to their local copy, while concurrently sending notifications of those changes via communication protocols to the remote user agents.
All copies have to eventually have the same content, regardless of the order of the received operations or problems that might occur during the message propagation, such as temporary connection loss.

近实时（NRT）协作技术在过去三十年中已被CSCW社区深入研究。主要针对协同编辑，相关的工作包括OT算法和用于在Web上实现并发编辑的系统。

这些方法利用有效的和可靠的并发控制机制，从而产生了一大批采用OT算法的系统，如Google Docs。

OT算法和相关的系统有个优点是，他们不需要任何锁机制来确保共享数据的一致性。在NRT系统中，用户代理（客户端）会立即在本地副本应用编辑操作，同时通过通信协议向远程用户代理（服务端）发送这些更改的通知（编辑操作）。

无论接收操作的顺序是什么，也无论消息传播过程中可能出现问题（如临时连接丢失），所有副本最终都会有相同的内容。

Recent advances on the Web allowed the development of fast and reliable communication protocols, such as WebRTC, Websockets, XMPP over Websockets, Server-Sent Events, which were also quickly adopted by Web communities, industry and academia.
Besides enabling the message propagation technology stack required for shared editing systems, such protocols can leverage the use of peer-to-peer (P2P) shared editing algorithms and offer a fast and reliable communication infrastructure for their implementations.
Thus, P2P approaches became a viable alternative to the more traditional client-server approaches [3]. This is due to the fact that each collaborator receives the updates in a N-way communication and applies them locally, without the need to wait for acknowledgment data, orders or transformed operations from a central server.
In consequence, existing NRT collaboration algorithms need to adapt to new performance requirements, which is not a trivial task, especially in the case of massive collaboration, with a scaling number of users and changes [20].

Web技术的快速发展，催生了很多被Web社区、业界和学术界采用的快速可靠的通信协议，如WebRTC、Websockets、XMPP over Websockets、Server-Sent Event。

除了支持协同编辑系统所需的消息传播技术栈外，此类协议还可以利用P2P协同编辑的算法，为其实现快速可靠的通信基础设施。

因此，P2P方法成为较传统的client-server方法的可行替代方法。这是因为每个协作者都通过N-way communication接收更新消息，并在本地进行更新，而不需要等待来自中央服务器的确认(ack)、顺序或转换操作。

因此，现有的NRT协作算法需要适应新的性能要求，这不是一项简单的任务，特别是在大规模协作（用户数量和文档变化非常大）的情况下。

With few exceptions, available OT algorithms are designed for client-server architectures.
Algorithms that do support N-way P2P message propagation still rely on propagating a state vector (e.g., COT [29]) with each message.
Moreover, algorithms that need preprocessing on the server side cannot be used in such P2P settings.
In the past decade, CRDT algorithms [20, 2, 21, 23] emerged in the distributed systems specialization area and were also used in collaborative editing [1].
These have a small document update size and do not rely on vector clocks (e.g., the WooT approach [20]), and can therefore suit the new communication protocols and practices on the Web.
A short comparison of the different algorithms is given in Section 2.

OT算法是少数为client-server体系结构设计的。支持N-way P2P消息传播的算法依赖于用每条消息传播一个状态向量(statevector)（例如COT[29]）。

此外，需要在服务器端进行预处理的算法不能用于此类P2P系统。在过去的十年中，CRDT算法出现在分布式系统专业领域，也用于协同编辑[1]。

它们具有较小的文档更新大小，并且不依赖向量时钟（例如，WooT方法[20]），因此可以适应新的网络通信协议和Web实践。第2节简要比较了不同的算法。

Regardless of being P2P or a client-server approach, the available NRT collaboration tools (e.g. OT-based) mostly support linear data or other specific ones (e.g. tree-like [11]) for ensuring the above described properties.
Applications based on complex models must therefore map the underlying data to the data structure that is supported by the used collaboration framework.
However, this process is time consuming, application-specific, and often hard to achieve. Moreover, there are few open-source implementations that work directly in Web browsers, can be used P2P and offer a developer-friendly, easy and intuitive way for rapidly enabling NRT collaboration on custom data types.

无论是P2P还是client-server方法，可用的NRT协作工具（例如基于OT算法的）大多只支持线性数据或其他特定数据（例如树状），以确保上述属性。

因此，基于复杂模型的应用程序必须将应用依赖的数据结构映射到所用协作框架支持的数据结构上。然而，对于特定的应用，这个过程非常耗时，而且通常很难实现。

此外，很少有可以直接在Web浏览器中运行、可用于P2P的、并且对开发人员友好、简单和直观，可以快速实现自定义数据类型上的NRT协作的开源实现。

To overcome these shortages of existing algorithms, we present a new approach called YATA (Yet Another Transformation Approach) for enabling NRT collaboration on extendable data types and Yjs, its open-source implementation.
We have developed an efficient algorithm that ensures the convergence and intention preservation for collaboration on shared data types.
By design YATA inherently leads to fewer conflicts, exposes a favorable run time complexity, supports offline editing (i.e. given a peer that is joining the collaboration session with unsynchronized changes) and collaboration on various data types.
The algorithm uses an internal linked list representation, similar to the CDRT approaches WooT [20] and WooTH [1].
However, as it has been proven that keeping deleted operations leads to a loss of performance, YATA solves this disadvantage by introducing a garbage collector for avoiding a drastic increase of unnecessary operations.

为了克服现有算法的这些不足，我们提出了一种称为YATA（Yet Another Transformation Approach）的新方法，用于支持可扩展数据类型。

YATA的开源实现是Yjs。我们开发了一种高效的算法，确保了共享数据类型在协作时的收敛和意图保持。

通过精心的设计，YATA可以很好的减少冲突，在运行时的复杂性方面也有优势，并且支持离线编辑和对各种数据类型的协作。

该算法使用内部链表表示，类似于CDRT 方法 WooT和WooTH。除此之外，保留删除的操作会导致性能损失，YATA通过引入垃圾收集器来避免不必要操作的急剧增加，从而解决了这一缺点。

For exploiting YATA in Web applications, the algorithm was implemented as an open-source framework called Yjs1 [19], which can be used with multiple communication protocols, including P2P, federated or client-server.
By means of Yjs, which is already garnering interest from the open-source community, we have observed YATA’s performance and consider it to be very promising for leveraging lightweight applications, where collaboration logic can be easily engineered on the client side.
Finally, besides the usage in real-world open-source products, Yjs has been thoroughly evaluated in a simulated distributed environment for performance, testing the conflict resolution and its scalability, with very good results.

对于在Web应用程序中使用YATA的探索方面，该算法已经被一个名为Yjs的开源框架所实现，可用于多种通信协议，包括P2P、联邦制(federated)或client-server。

它已经获得了来自开源社区的关注，我们通过观察评估YATA的性能，认为它在轻量级应用程序方面非常有前途，其中协作逻辑可以很容易地在客户端上设计、实现。

最后，除了在现实世界的开源产品中使用，Yjs在模拟分布式环境中进行了全面的性能评估，测试了冲突解决的能力及其可扩展性，并取得了非常好的结果。

The rest of this paper is organized as follows. First, in Section 2 we give a short introduction to consistency maintenance algorithms, their development within the CSCW community and describe their most relevant features.
Section 3 describes the YATA approach, offers a formal proof that it converges regardless of the number of peers involved in collaboration and presents a time and space complexity analysis.
Furthermore, we offer the details for extending the approach to other data types in Section 4.
Section 5 shortly describes the Yjs framework. The consistency tests performed for our approach and the usage of the framework in real applications are presented in Section 6.
Finally, Section 7 summarizes the main contributions and provides an outlook for this work.

本文的其余部分组织如下。首先，在第2节中，我们简要介绍了一致性维护算法和它们在CSCW社区中的发展，并描述了它们最相关的特性。

第3节描述了YATA方法，提供了一个正式的证明，证明了不管参与协作的节点数量多少，YATA方法都是收敛的，并给出了时间和空间复杂性分析。

此外，我们在第4节中提供了将该方法扩展到其他数据类型的详细信息。第5节简要介绍了Yjs框架。

第6节介绍了为我们的方法执行的一致性测试以及框架在实际应用中的使用。最后，第7节总结了主要贡献，并对这项工作进行了展望。


## 2 YATA方法 THE YATA APPROACH

The YATA approach is created to provide a scalable solution for P2P optimistic concurrency control on the Web.
The main goals are to allow the P2P collaborative editing of Webpages (DOM elements), graphs, lists, objects and arbitrary types in the Web browser, using cutting-edge protocols for message propagation.
Therefore, the algorithm proposes a basic structure using a linked list, which can be extended to achieve collaboration on new shareable data types.
YATA’s linked list internal representation and a collection of predefined rules limit the number of possible conflicts and ensure intention preservation and convergence.
The core idea is enforcing a total order on the shared data types. YATA also supports offline editing, being meant to cope with requirements coming from both Web and mobile clients, such as small operation updates for low bandwidth, on and off connections, random message order at receive time, etc.

YATA方法旨在为Web上的P2P乐观并发控制提供可扩展的解决方案。

主要目标是使用先进的消息传播协议（webRTC/websocket），让网页（DOM元素）、图形（图表）、列表、对象和Web浏览器中的任意类型可以P2P协作编辑。

因此，该算法提出了一种基于链表的基本结构，通过扩展链表以实现新的可共享数据类型上的协作。

YATA的链表内部设计和一系列预先定义的规则限制了可能的冲突数量，并保证了意图保留和收敛。其核心思想是在共享数据类型上确保`全序关系(total order)`。

YATA还支持离线编辑，旨在应对来自Web和移动客户端的需求，例如低带宽的小操作更新，连接和断开连接，接收时的随机消息顺序等。

YATA currently supports collaboration on linear data,trees, associative arrays and graphs.
Using those types, it is possible to create more complex data types.

YATA目前支持线性数据、树、关联数组和图形方面的协作。使用这些类型，可以创建更复杂的数据类型。

In the following we formalize our approach and exemplify YATA’S behavior on text (linear data).
After giving the assumptions, definitions and describing how convergence is achieved, we extend the linear representation to more data types and explain how those are further realized us-ing YATA.

在下文中，我们将展示我们的方法，并将YATA的行为应用于文本（线性数据）。在给出假设、定义和描述如何实现收敛后，我们将线性表示扩展到更多数据类型，并解释如何使用YATA进一步实现这些数据类型。

### 2.1 要求 Requirements

**Unique identifier**. Each user is represented by a unique identifier (userid). Additionally, each user gets an operation counter which gets incremented every time a user creates an operation. 

Upon its creation, the operation thus gets as-signed a unique identifier which is composed of the userid and the current operation counter.

**唯一标识符**。每个用户都用一个唯一标识符（userid）表示。此外，每个用户都会获得一个操作计数器，该计数器在用户每次创建一个操作时都会递增。创建操作后，该操作将获得一个唯一标识符，该标识符由用户ID和当前操作计数器组成。

**Operations**. YATA represents linear data (e.g. text) as a doubly linked list. We define only two types of changes on this representation:**insert and delete**. 

As it is shown inFigure 1, every element in the linked list is represented by an insert operation (also named insertion). When an insertion is deleted, it is just marked as such and not removed from the list (i.e. tombstone approach). 

Therefore, delete operations do not have an effect on our insert algorithm. In Section 3.5 we define a garbage collection mechanism that, in combination with our insert algorithm 3.4, can remove deleted insertions.

**操作**。YATA将线性数据（如文本）表示为双链表。我们在此表述中仅定义了两种类型的变更：**插入和删除**。

如图1所示，链表中的每个元素都由一个插入操作产生，即元素和插入操作时一一对应的。删除插入时，仅将其做一个标记，而不从列表中删除（墓碑机制）。

因此，删除操作对我们的插入算法没有影响。在第3.5节中，我们定义了一种垃圾收集机制，该机制与我们的插入算法3.4相结合，可以移除被标记为删除插入的节点。

![图片](https://shimo.zhenguanyu.com/uploader/f/A6sgKXRBF0PvLhyl.png?fileGuid=TRpX6GXqvPYvqqH8)

We denote an insert operation as $o_k$($id_k$, $origin_k$, $left_k$, $right_k$, $isDeleted_k$, $content_k$), where $id_k$ is $o_k$ ’s unique identifier,$content_k$ is the content (e.g. a character), $isDeleted_k$ is a flag that marks an insertion as deleted, 
and $origin_k$ , $left_k$, $right_k$ are references to other already existing insertions. We represent linear data as a doubly linked list $S$ of insertions. 

Therefore, $left_k$ , and $right_k$ reference to the previous node, respectively next node in the list. $origin_k$ denotes the direct predecessor at creation time (i.e., the node after which it was originally integrated to).

我们将插入操作表示为 $o_k$($id_k$, $origin_k$, $left_k$, $right_k$, $isDeleted_k$, $content_k$)，其中 $id_k$ 是 $o_k$ 的唯一标识符，$content_k$ 是内容（例如字符），$isDeleted_k$ 是将插入标记为是否删除，而 $origin_k$ ，$left_k$ ，$right_k$ 是对其他现有插入的引用。我们将**线性数据**表示为双向链表 $S$ 。

因此，$left_k$ 和 $right_k$ 分别引用链表中的前一个节点和下一个节点，$origin_k$ 则表示创建时的直接前驱节点(即，它最初集成到的节点)

We define $<$ as the natural predecessor relation on $S$.

我们将 $<$ 定义为 $S$ 上的自然前置关系。

$o1 < o2$ 当且仅当 $o1$ 是 $o2$ 的前驱节点

$o1 <= o2$ 当且仅当$o1 <= o2$ 并且 $o2$ 与 $o1$ 的并集等于 $o2$, 即 $o1$ 是 $o2$ 的子集

![图片](https://shimo.zhenguanyu.com/uploader/f/ThQjVAKEcyCoSJ89.png?fileGuid=TRpX6GXqvPYvqqH8)

**Example**. When a user creates a new insertion at a local site, this is integrated between two insertions $o_i$, and $o_j$.
The newly created insertion is therefore defined as: $o_{new}$($id_k$, $o_i$, $o_i$, $o_j$, false, $content_{new}$).
Note that $left_{new}$,and $right_{new}$ are defined when an insertion has been applied to the list and may change when new insertions are integrated into $S$ , but $origin_{new}$, defined at insertion creation time is never modified.
After the user integrates a new insertion at his local site he sends it (via broadcast), as is, to all users.

举个例子。当用户在本地站点创建新插入时，这将集成在 两个插入 $o_i$ 和 $o_j$ 之间。因此，新创建的插入被定义为：$o_{new}$($id_k$ , $o_i$ , $o_i$ , $o_j$ , $false$ , $content_{new}$)。

请注意，$left_{new}$ 和 $right_{new}$ 是在一个插入操作被置于链表时定义的，当另一个新插入操作集成到 $S$ 中时可能会导致 $left_{new}$ 和 $right_{new}$ 发生更改，但在插入创建时定义的$origin_{new}$永远不会发生改变。

当用户在本地上集成新的插入操作后，他会按原样将其发送（通过广播）给所有用户。

A special case occurs when an insertion is performed at the beginning or at the end of $S$ , because there is no insertion to refer to as $left_*$, respectively $right_*$. This can be fixed by using special delimiters, which denote the beginning and the end of $S$ , respectively. Therefore, we assume without loss of generality that an insertion always defines $origin_k$,$left_k$, and $right_k$

在 $S$ 的开头或结尾执行插入时会出现一种特殊情况，因为没有可称 $left_*$ 的插入或是 $right_*$ 的插入.这可以通过使用特殊的`分隔符(delimiters)`来解决，这些分隔符分别表示 $S$ 的开始和结束。

因此，我们假设插入总是可以定义$origin_k$ 、$left_k$ 和 $right_k$ ，而不丧失一般性。

### 2.2 YATA 算法

![图片](https://shimo.zhenguanyu.com/uploader/f/A6sgKXRBF0PvLhyl.png?fileGuid=TRpX6GXqvPYvqqH8)

The example in Figure 1 shows how a received operation $o_new$ is integrated in $S$. Here, the red connections reference the intention of the insertion, which is defined through $left_new$ and $right_new$ - i.e. insert the letter between these two letters. When the insertion is integrated, YATA assures that it will be placed somewhere between these letters. Convergence is therefore ensured, unless one or more remote operations were already inserted between $left_new$ and $right_new$, which then leads to a conflict that needs to be solved.

图1中的例子显示了如何将接收到的操作 $o_{new}$ 集成到 $S$ 中。在这里，红色连接指插入意图，该意图通过 $left_{new}$ 和 $right_{new}$ 定义，即在这两个字母（位置$o1$上的字母Y和位置$o4$上的字母A）之间插入。

当插入被集成时，YATA确保它将被放置在这些字母之间的某个位置。因此可以确保收敛，除非在 $left_{new}$ 和 $right_{new}$ 之间已经插入了一个或多个远程操作，这将导致需要解决的冲突。

Definition: **Intention Preservation.**

The intention of an insertion $o_i$ is preserved if and only if the insertion is integrated some where between $left_i$ and $right_i$. This notion of intention preservation conforms to the natural perception for the intention of text insertions, and it is similar to other definitions found in the literature. In [2], the intention preservation is defined when each character inserted by a user between two other characters in a document keeps its relative position between its neighbors during the editing process.

**意图保留**：当且仅当插入被集成在 $left_i$ 和 $right_i$ 之间某处时，插入 $o_i$ 的意图才被保留。

这种意图保留的概念符合实际的文本插入，与文献中的其他定义类似。在文献[2]中，意图保留是指，对于用户在两个字符中间的每次插入操作，都要保留字符在编辑过程中与这两个字符之间的相对位置。

**The concurrent insertion problem**

In the example in Figure 1, the intention of the insertion of “$T$” is that should be inserted between the characters “$Y$” and the “$A$” - e.g., at creation time, “$T$” sees only “$YA$”. However, a letter sequence “$AT$” has been already inserted between these two letters. In the example,$o_2$, and $o_3$ conflict with $o_{new}$

**并发插入问题**：在图1的示例中，插入“$T$”的意图是在字符“$Y$”和“$A$”之间插入“$T$”。例如，在创建时，“$T$”只看到“$YA$”。但是，在这两个字母之间已经插入了字母序列“$AT$”。在本例中，$o_2$和 $o_3$ 与 $o_{new}$ 冲突。

Definition: **Conflicting insertions.**

Keeping the above notations, assuming $S = left_{new} · c_1 · c_2 · .. · c_n · right_{new}$, then we say that $o_{new}$ conflicts with $c_1..c_n$.

**插入冲突**：保留上述符号，假设$S = left_{new} · c_1 · c_2 · .. · c_n · right_{new}$，那么我们说 $o_{new}$ 与 $c_1..c_n$ 冲突。

In the following we define a function $<_c$ that specifies a position for $o_{new}$ in the set of conflicting insertions ($c_1..c_n$). As such $o_{new}$ is integrated between $c_i$, and $c_i+1$ when $c_i <_c o_{new} <_c c_i+1$. Furthermore, we show that every site converges when integrating with $<_c$ (i.e., we prove that $<_c$ is a strict total order function).

下面我们将定义函数 $<_c$。它指定了 $o_{new}$ 在插入集 $c_1..c_n$ 中发生冲突的位置。当$c_i <_c o_{new} <_c c_i+1$时，$o_{new}$将被插入到在 $c_i$ 和 $c_i+1$ 之间。此外，我们还证明了当使用 $<_c$ 函数集成时，每个节点都收敛（即，我们证明 $<_c$ 是一个严格全序函数）。

In the following we will frequently refer to the graphical representation of insertions as it is shown in Figure 1. The insertion $o_{new}$ has three references/connections. On the left hand site of $o_{new}$ there is a $origin_{new}$ connection, and a $left_{new}$ connection to $o_1$. On the right hand site of $o_{new}$ there is a $right_{new}$ connection to $o_4$. While $left_{new}$, and $right_{new}$ define the usual predecessor/successor relation in a linked list. The $origin_{new}$ connection will never change and is employed to find the strict total order function $<_c$.

在下文中，我们将经常提到插入的图形（如图1）表示。

插入$o_{new}$有三个引用/连接。在 $o_{new}$ 的左边站点有一个$origin_{new}$连接以及一个 $left_{new}$到 $o_1$ 的连接。在$o_{new}$右边站点有一个 $right_{new}$ 到 $o_4$ 的连接。而$left_{new}$和$right_{new}$定义了链接列表中常见的前置/后续关系。$origin_{new}$连接永远不会更改，它用于查找严格全序函数$<_c$ 。

![图片](https://shimo.zhenguanyu.com/uploader/f/A6sgKXRBF0PvLhyl.png?fileGuid=TRpX6GXqvPYvqqH8)

We compose the following three rules in order to find a strict total order $<_c$ on conflicting operations.

为了找到冲突操作的严格全序函数 $<_c$ ，我们提出了以下三个规则。

**Rule 1**We forbid crossing of origin connections (red lines in the graphical representation) between conflicting insertions. This rule is easily explained using the graphical representation of insertions in the linked list. As we stated before, every insertion has an origin connection to an insertion to the left (to a predecessor). Only when two operations are concurrently inserted after the same insertion, they will have the same origin.

**规则1：** 我们禁止在相互冲突的插入之间交叉`origin`连接`（crossing of origin connections）`（上图中图形中的红线）。

使用链表中插入的图形表示很容易解释这一规则。如前所述，每个插入都有一个到左侧/前置插入的 `origin` 连接。只有两个操作 在同一个插入后面并行插入时，它们才会有相同的 `origin`。

![图片](https://shimo.zhenguanyu.com/uploader/f/P0Vkwfxh0o5suYTu.png?fileGuid=TRpX6GXqvPYvqqH8)

Figure 2 illustrates the two cases that are allowed when line crossing is forbidden. Either, one operation is between the other operation and its origin, or the origin of the one operation is a successor of the other operation. Therefore, the following formula must hold for conflicting insertions $o_1$ and $o_2$:

**图2** 说明了禁止交叉线(line crossing)时允许的两种情况。要么一个操作位于另一个操作与其origin之间，要么一个操作的origin是另一个操作的后续操作。因此，在插入$o_1$和$o_2$发生冲突时，以下公式必然成立：

![图片](https://shimo.zhenguanyu.com/uploader/f/mKSZRthL2gLCOp9a.png?fileGuid=TRpX6GXqvPYvqqH8)

**Rule 2** Specifies transitivity on $<_c$. Let $o_1 <_c o_2$. Then following rule ensures, that there is no $o$ that is greater than $o_2$, but smaller than $o_1$, with respect to $<_c$

**规则2：** 指定 $<_c$ 上的传递性。$o_1 <_c o_2$确保了没有大于$o_2$但小于$o_1$的$o$

![图片](https://shimo.zhenguanyu.com/uploader/f/PBLJWWswLdeLZtqa.png?fileGuid=TRpX6GXqvPYvqqH8)

**Rule 3**When two conflicting insertions have the same origin, the insertion with the smaller creator id is to the left. We borrow this rule from the OT approach. But in OT this rule is applied when the position parameters are equal.

**规则3：** 当两个冲突的插入具有相同的原点时，创建者`id`较小的插入位于左侧。我们从OT算法中借用了这条规则。但在OT算法中，当位置参数相等时，才应用此规则。

![图片](https://shimo.zhenguanyu.com/uploader/f/5L7P31ahKVpHVbXm.png?fileGuid=TRpX6GXqvPYvqqH8)

We get retrieve the total order function $<c$ by enforcing all three rules:

通过强制执行这三条规则，我们得到了检索 total order function $<_c$ 的结果：

![图片](https://shimo.zhenguanyu.com/uploader/f/6fiwRUNBn2bU9vBu.png?fileGuid=TRpX6GXqvPYvqqH8)

### 2.3 正确性 Correctness

$<_c$ only depends on the $origin*$ connection, and we specified above, that $origin*$  never changes. We can conclude that whenever two sites compare conflicting insertions, they will find the same order for insertions. Furthermore, this implies that all sites will eventually converge. Finally, we prove that $<_c$ is a strict total order function, i.e. $≤c$  is a total order on conflicting operations. Therefore, we have to show that for all conflicting insertions $o_1$, $o_2$, and $o_3$ the ordering function $≤c$ is antisymmetric, transitive, and total.

$<_c$ 仅取决于 $origin*$连接，我们在上面指定了 $origin*$永不改变。我们可以得出结论，每当两个站点比较发生冲突的插入时，它们都会找到相同的插入顺序。此外，这意味着所有站点最终将聚合。

最后，我们证明了 $<_c$ 是一个严格全序函数，即 $≤_c$ 是关于发生冲突操作的全序函数(total order function)。

因此，我们必须证明，对于所有冲突的插入 $o_1$、$o_2$ 和 $o_3$，排序函数 $≤_c$ 是具有反对称性、可传递性和整体性(total)。

![图片](https://shimo.zhenguanyu.com/uploader/f/rmubvHaK71gNcC8T.png?fileGuid=TRpX6GXqvPYvqqH8)

![图片](https://shimo.zhenguanyu.com/uploader/f/GiUwXAJbHlPStYFj.png?fileGuid=TRpX6GXqvPYvqqH8)

**Proof antisymmetry**. Let $o_1$, and $o_2$ be insertions, with $o_1 ≤_c o_2 ∧ o_2 ≤_c o_1$

**证明反对称性**：让 $o_1$ 和 $o_2$ 插入，并且保持 $o_1 ≤_c o_2 ∧ o_2 ≤_c o_1$

* 第一种情况：$origin_1 = origin_2$。原因是用户的ID总是有序的。

![图片](https://shimo.zhenguanyu.com/uploader/f/QT2OOSqhIzwtM7RO.png?fileGuid=TRpX6GXqvPYvqqH8)

* 第二种情况：$origin_1 < origin_2$![图片](https://shimo.zhenguanyu.com/uploader/f/RrjzPADPHdwel6hM.png?fileGuid=TRpX6GXqvPYvqqH8)
* 第三种情况：$origin_1 > origin_2$。同第二种情况。

![图片](https://shimo.zhenguanyu.com/uploader/f/GBzUUyFYs2BSGCII.png?fileGuid=TRpX6GXqvPYvqqH8)

**证明传递性**：当 $o_1$，$o_2$ 和 $o_3$ 被插入，并且 $o_1 ≤_c  o_2  ∧  o_2  ≤_c o_3$，则 $o_3$ 和 $o_1$ 冲突，不失一般性， $o_1$ $o_2$ $o_3$ 都不相等。

![图片](https://shimo.zhenguanyu.com/uploader/f/7bwyJck0VqG3FAXX.png?fileGuid=TRpX6GXqvPYvqqH8)

**Proof totality**. Let $o1$, $o2$ be insertions, with $o1 != o2$. Totality is fulfilled if the following statement holds:

**证明整体性**：当 $o_1$ $o_2$ 被插入，并且 $o_1$ 不等于 $o_2$。如果以下公式成立，则满足整体性：

![图片](https://shimo.zhenguanyu.com/uploader/f/Uq7CcodvmW53iKzs.png?fileGuid=TRpX6GXqvPYvqqH8)

When we apply the ordering relation (6) we get the formula in Figure 3 and show for each case that totality is fulfilled.

当我们应用排序函数（6）时，我们得到了下图中的公式，并表明在每种情况下都满足了totality。

![图片](https://shimo.zhenguanyu.com/uploader/f/XdHaCGCEUVG6WklH.png?fileGuid=TRpX6GXqvPYvqqH8)

下面四种情况是针对整体性证明的不同情况

![图片](https://shimo.zhenguanyu.com/uploader/f/GrhSSQmE7RwFy0lm.png?fileGuid=TRpX6GXqvPYvqqH8)

### 2.4 插入算法 Insert Algorithm

Previously, we proved that there exists a total order relation on conflicting insertions. In this section we show how we can compute the new position for an insertion, when we already have an ordered list of insertions.

在此之前，我们证明了当发生**冲突插入**时存在 全序关系（total order relation）。在本节中，我们将展示当我们已经有一个有序的插入列表时，如何计算插入的新位置。

Listing 3.4 shows how the conflicting insertion can be solved algorithmically. The algorithm exploits property (3) (no line crossing) as a breaking condition. Therefore, we stop computing when origin connections definitely will cross.

列表3.4 显示了如何通过算法解决冲突插入。该算法利用规则（3）(无交叉线no line crossing) 作为中断条件。因此，当原始连接肯定会交叉时，我们停止计算。

The worst case time complexity of the algorithm is $O\left(|C|^2\right)$ where $|C|$ is the number of conflicting operations. In the case that the breaking condition is reached in the first iteration, no positions are compared. This is why the best case time complexity is O(1). A complexity analysis is presented in Section 3.7.

该算法最坏情况下的时间复杂度为$O\left(|C|^2\right)$ ，其中 $|C|$是冲突操作的数量。在第一次迭代中达到破坏条件的情况下，不比较任何位置。这就是为什么最佳情况下的时间复杂度为$O(1)$。复杂性分析见第3.7节。

![图片](https://shimo.zhenguanyu.com/uploader/f/VeeA1gkAX29KrC4E.png?fileGuid=TRpX6GXqvPYvqqH8)

* 规则2：寻找 `i` 左边的最后一个操作（search for the last operation that is to the left of i）
* 规则1和规则3：如果这个公式成立，`i`就是`o`的下一个节点(if this formula is fulfilled, i is a successor of o)
* 规则1不再满足，否则原点连接将交叉(rule 1 no longer satisfied since otherwise origin connections would cross)


### 2.5 垃圾回收 Garbage Collection

In the literature, garbage collection has been also proposed in [21] where “cold” areas of a document are identified or in Logoot [31], which uses a graveyard for removed operations. Conceptually, an insertion marked for deletion can be garbage collected when all sites received the remove operation and have in their internal representation the operation that is to be garbage collected. However, it is hard to determine if all collaborators know simultaneously that a content was deleted. Ideally, using classic methods such as state vectors, a mechanism where YATA ensures that all sites have applied a removal can be a candidate solution. As a downside, such a mechanism would require more network resources and leads to a decrease in performance, especially in P2P settings. An optimal solution to this issue is still being considered.

在文献[21]中提出了一种垃圾回收机制，提出了如何确定文档的“冷”（cold）区域的方法；

在文献[31] 中，使用“墓地法”用于（存放）被移除的操作。从概念上讲，当所有站点都接收到了删除操作并在其内部存储中标记了该删除操作应该被垃圾回收机制回收时，可以对该操作进行垃圾回收。

但是，很难确定所有协作者是否能够同时知道某个内容已被删除。理想情况下，在YATA中使用的状态向量等传统方式，可作为用于确保所有站点都已执行了删除操作的候选方案。

但是这种机制的缺陷是需要占用更多的网络资源从而导致性能下降，尤其是在`P2P 设置`中。该问题的最佳解决方案仍需进一步研究。

In the current approach, the problem is simplified by assuming that all users retrieved a certain remove operation after a fixed time period t which can be set according to the expected protocol and network characteristics (e.g., 30 s). In practice, YATA uses two buffers for garbage collection, to ensure that list elements are not directly removed. As such, once ok can be garbage collected, it will be moved into the first buffer. If nothing changes, after t seconds it will be copied into the second array and from here will be re- moved by the garbage collector (i.e., can be safely removed from the list and the buffer). From our practical experiences and the use in production, such a delay is sufficient to ensure that content will be removed safely, without any losses that may lead to inconsistencies. This is in line with experiments performed for assessing the NRT criteria and measuring the time in which operations are being applied. These experiments (cf. Figure 9, Section 6) show that the average time for receiving and applying a remove operation using text (with a length under 103 characters) at a remote site is approx. 12 ms. Under the same conditions, receiving and applying a single remove operation with a length of 105 characters at a remote site is done within an average time of 39.3 ms (SD 2.45 ms), from a pool of ten measurements.

在目前的方法中，通过假设所有用户都可以在一个固定时间段 `t` 后接收(retrieved)到某个删除操作（参数 `t` 可以根据预期的协议和网络特性进行设置，如 `t = 30s`），可以简化上述问题。

实际上，YATA 使用两个缓冲区进行垃圾回收，以确保不会直接删除列表元素。

因此，如果 $o_k$可以被垃圾回收，它将被移动到第一个缓冲区中。如果没有发生任何变化（If nothing changes），`t` 秒后它将被复制到第二个缓冲区中，并从这里被垃圾回收器删除（即可以安全地从列表和缓冲区中删除）。

从我们的实际经验和生产环境的使用效果来看，这样的延迟足以确保内容被安全地删除，而不会造成各个站点的不一致。这与评估 `NRT 标准`和测量应用操作时间的实验是一致的。

这些实验（参见图 9，第 6 节）表明，在远程站点使用文本（长度小于 `103` 个字符）接收和应用删除操作的平均时间约为`12` 毫秒。

在相同条件下，`39.3 ms (SD 2.45 ms)` 的平均时间内，能够从十个测量值池中接收和应用一个长度为 `105 `个字符的远程删除操作。

As a consequence of YATA’s rules, in some cases it is not possible to remove insert operations. The reason is that for an operation that is inserted between two undeleted insert-type operations, this could lead to a deleted predecessor or successor (cf. Figure 4).

根据 YATA 的规则，在某些情况下无法删除插入操作。原因是，对于在两个未删除的插入操作之间插入的操作，可能导致前驱节点或后续节点被删除（参见图 4）。

![图片](https://shimo.zhenguanyu.com/uploader/f/fdwdKmnBQKQ0RlBJ.png?fileGuid=TRpX6GXqvPYvqqH8)


In order to ensure consistency, YATA demands that a new insertion is always inserted between the most left non- deleted character and its direct successor. Only then, the garbage collector can remove all operations that are to the right of the firstdeleted insertion.

为了保证一致性，在 YATA 算法中，新插入操作的位置必须在最左边的未删除字符和它的直接后继字符之间。只有这样，垃圾回收机制才能删除第一个已删除插入的右侧的所有操作。

Furthermore, due to its design, the garbage collector in YATA may breaklate join mechanisms. This is because when a user is offline for a period longer than t seconds, it will still hold references to deleted operations, while online users who already performed certain removals do not. Therefore, YATA does not support garbage collection for a site while it is offline.

此外，由于其设计，YATA 中的垃圾收集器可能会破坏延迟加入机制。这是因为当用户离线时间超过`t` 秒时，它仍然会保留对已删除操作的引用，而已经执行某些删除操作的在线用户则不会。

因此，YATA 不支持站点离线时的垃圾回收。

### 2.6 离线编辑支持 Offine Editing Support

YATA supports offline editing using the internal data representation which is maintained at each client. Once clients are online, YATA performs a check for diverged states of the shared data and synchronizes it.

YATA 在每个客户端都维护一个内部数据存储方式（internal data representation），用于支持离线编辑。客户端连接网络后，YATA 会对共享数据的不同状态进行检查和同步。

Every site holds a state vector. It saves the next expected operation id per user. As an example, consider user1 with userid 1 is in a session with user2 with userid 2. Both users created two operations. As we explained above, the operation id is defined as a tuple of userid and operationcounter. Therefore, the state vector is expressed as: [(1, 2), (2, 2)] (assuming we start counting with 0).

每个站点都有一个状态向量。 它保存每个用户的下一个预期操作 `ID`。 例如，假设`ID` 为 `1` 的用户`user1`与`ID`为`2`的用户`user2`处于会话中。

两个用户都创建了两个操作。正如我们之前解释过的，操作 `id` 被定义为一个 `userid` 和 `operation counter` 的元组(tuple)。 

因此，状态向量表示为：$[(1, 2), (2, 2)]$ (假设从0开始计数)。

For synchronization, the state vector is not sent with each operation, but it is sent only once to all clients. A user that receives a state vector compares it with the local state vector and sends all remaining operations to the synchronizing client. In order to make operations integrable on the remote instances, operations are sent in the order and the form in which they were created. Our YATA’s implementation can transform integrated operations to their original form.

进行同步时，状态向量不是随每个操作一起发送，而是向所有客户端仅发送一次。 

接收状态向量的用户将其与本地状态向量进行比较，并将所有剩余的操作发送到同步客户端。 

为了使操作可在远程实例上集成，要按照创建它们的顺序和形式来进行发送。YATA 可以将聚合的操作转化其为原本的形式。


## 3 扩展类型 EXTENDABLE TYPES

This section describes some of the basic operation types and the general data structures which YATA supports. Building on top of the data structures, one can implement certain abstract data types and thus enable collaboration on common data formats such as JSON and XML. The supported types currently include linear data types (e.g., arrays, linked lists, sorted arrays, bitmaps), trees, graphs and associative arrays.

本节介绍 YATA 支持的一些基本操作类型和通用数据结构。 

在现有的数据结构的基础上，可以实现某些抽象的数据类型，从而实现对常见数据格式（如 `JSON` 和`XML`）的协作。 

目前支持的类型包括线性数据类型（例如，数组、链表、排序数组、位图）、树、图形和关联数组。

### 3.1 列表类型 List Manager Operation

A List Manager (cf. Figure 5) is an abstract operation type that manages insert operations. It basically handles two delimiters that denote the beginning and the end of the list, as exemplified in the algorithm’s description. Hence, new insertions are placed somewhere between these delimiters according to YATA’s rules.

列表管理器（参见图 5）是一种**管理插入操作**的抽象操作类型。如算法描述中的例子所示，它基本上处理两个表示列表开头和结尾的分隔符。 因此，根据 YATA 的规则，新的插入被放置在这些分隔符之间的某处。

![图片](https://shimo.zhenguanyu.com/uploader/f/oCl4Gbarpz7ZpEDo.png?fileGuid=TRpX6GXqvPYvqqH8)

The List Manager operation also handles how to address the elements in the associative list and how to transform it to a certain data type (e.g. String). It represents linear data structures such as lists and arrays, but it can also be used in order to represent tree-like data structures. In this case, the trees are achieved by allowing the content of insertions to contain in their turn List Managers.

列表管理器还处理如何对关联列表中的元素进行寻址以及将其转换为某种数据类型（例如字符串`String`）的问题。 它可以用来表示线性数据结构，例如链表和数组，但也可用于表示树状数据结构。 

在这种情况下，树通过允许插入的内容包含在它们的列表管理器中的方法实现。

### 3.2 替换类型 Replace Manager Operation

YATA supports only insert and delete operations. However, when dealing with more complex types, update operations are also required in order to ease the development. As such, YATA supports updates of existing content by offering a dedicated type which enables content replacement. A Replace Manager (cf. Figure6 handles the replace functionality. As a basic example, consider the case where two users (with user ids 1 and 2) concurrently replace the number 0 in a text with their respective user id. In order to keep consistency, each site should reflect the replace operation and reach the same content, i.e. either 1 or 2 will replace the old number 0. YATA solves this problem by transforming it into an already solved problem, using data types which ensure consistency.

YATA 仅支持插入和删除操作。 但是，在处理更复杂的类型时，还需要更新操作以简化开发。 

因此，YATA 通过提供一种内容替换的专用类型的方法来支持更新已有内容。 

替换管理器处理替换功能（参见图 6 ）。例如，考虑两个用户（`用户 ID` 为 `1` 和 `2`）同时用他们各自的用户 `ID`替换文本中的数字` 0` 的情况。

为了保持一致性，每个站点都应该执行替换操作并达到相同的内容，即`1`或`2`将替换原本的数字`0`。YATA 通过将其转**换为已经解决的问题**，使用确保一致性的数据类型。

![图片](https://shimo.zhenguanyu.com/uploader/f/1lEPZOUDFFHxkVzi.png?fileGuid=TRpX6GXqvPYvqqH8)

The Replace Manager inherits its functionality from the List Manager. Using this data representation, the first insertion (which must not be a Delimiter) of a Replace Manager denotes the actual content. In consequence, in order to replace this content once a user performs a new insertion, the new content will be added as the first insertion of the Replace Manager. In Figure 6 the red line references the current content of the Replace Manager. Since YATA ensures that all sites will have the same content in the end, all sites eventually reference the same insertion as the content of the Replace Manager. Moreover, in order to free up memory all other insertions can be implicitly deleted.

替换管理器从列表管理器继承其功能。使用这种数据表示方法，替换管理器的第一个插入（不能是分隔符）表示其真实内容。 

因此，为了在用户执行新插入后替换此内容，新插入的内容将作为替换管理器的第一个插入。 

在图 6 中，红线指向了替换管理器对当前内容的引用。 由于 YATA 确保所有站点最终都具有相同的内容，因此所有站点最终引用的插入内容都与替换管理器相同。

此外，为了释放内存，可以隐式删除所有其他插入。

### 3.3 对象类型 Map Manager Operation

A map is also known as a dictionary, or an associative array. It is an abstract data type that maps keys to values.

`Map`也称为字典或关联数组。它是一种将键映射到值的抽象数据类型。

Figure 7 depicts YATA’s representation of a Map Manager operation. In order to support concurrent actions on a shared map, we assign each key to a Replace Manager. Therefore, the values addressed by keys will converge upon concurrent changes performed by multiple users i.e., users collaboratively edit the content addressed by a specific key. We can use any map data structure to map keys to Replace Managers. The values can contain primitive data types or YATA own types. This construct is suitable for easily enabling collaboration on name/value pairs (e.g., objects, dictionaries, etc.). The current value of a key is replaced and retrieved by accessing the respective Replace Manager.

图7描述了YATA 对 `Map管理器` 的表示。为了支持共享map上的并发操作，我们将map中的每个key都分配给一个替换管理器。

因此，key对应的value将聚合到多个用户执行的并发更改上，即，用户协作编辑特定key对应的value。

我们可以使用任何映射数据结构来映射key到替换管理器。这些值可以包含基本数据类型或YATA自己的类型。此结构适用于在 `key/value` 对上进行协作。

通过访问相应的替换管理器来替换和检索key对应的当前value。

![图片](https://shimo.zhenguanyu.com/uploader/f/KrN7aG09A1QN7uBO.png?fileGuid=TRpX6GXqvPYvqqH8)

### 3.4 特定的数据类型 Representation of Speciﬁc Data Formats

Using YATA, by combining the simple types explained above, data formats such as JSON or XML can be realized as shared data types.

通过YATA结合上面提到的简单类型, `JSON`或`XM`L等数据格式可以实现为共享数据类型。

The JSON data format is built on collections of name/value pairs and ordered lists of values. Hence, with YATA JSON can be easily created by using a Map Manager, in combination with other data types which can be used for the attributes, such as further Map Manager operations or List operations (for attributes implementing strings or arrays).

JSON数据格式基于`name/value`对的集合和有序链表构建。因此，使用YATA，JSON可以通过使用 Map 管理器，结合其他可用于属性的数据类型轻松创建，例如map管理器或list操作器（用于实现`string` 或`array` 的属性）。

![图片](https://shimo.zhenguanyu.com/uploader/f/NsgfBSTxwpJ6c46u.png?fileGuid=TRpX6GXqvPYvqqH8)

YATA can also enable NRT collaboration on XML (cf. Figure 8). An XML DOM Element2 has XML attributes and an ordered list of children (XML elements or XML text). Therefore, we compose an XML-Type in YATA as a Map Manager (which handles the XML attributes) and a List Manager (which handles the children). However, since the List Manager and the Map Manager support to insert any value, we have to put some restrictions to the structure of the XML-Type:

YATA还可以支持`XML`上的NRT协作（参见图8）。XML DOMElement2具有XML属性和子元素（XML元素或XML文本）的有序列表。

因此，我们在YATA中将XML类型组合为map 管理器（处理XML属性）和 list 管理器（处理子项）。

但是，由于列表管理器和映射管理器支持插入任何值，因此我们必须对XML类型的结构设置一些限制：

* The Map Manager, which handles the XML attributes, must only map from a non-empty string to a nonempty string
* 处理XML属性的映射管理器只能从非空字符串映射到非空字符串
* The List Manager, which handles the children, must only contain other XML types, or strings which represent XML text elements
* 处理子项的列表管理器必须只包含其他XML类型，或表示发送的XML文本元素的字符串


## 4 YJS: 基于P2P的框架 YJS: THE P2P SHARED EDITING FRAME-WORK

As already introduced, Yjs [19] is the open-source imple-mentation of the YATA approach. In contrast to similarOT, CRDT and shared editing implementations that support only a very limited number of document structures orrepresent them diﬀerently, the Yjs framework encouragesdevelopers to build custom data types. A custom type canuse existing implemented types (as previously explained) in order to give meaning to the actions on the data and to ﬁrecustom events. At the time of writing this paper, Yjs hasimplemented support for list,associative arrays,XML,text,and rich text types. Yjs works on modern Web browsers, in-cluding mobile (on Android devices) and oﬀers a quick andeasy way to embed collaboration in Web applications.

如前所述，Yjs是YATA方法的开源实现。

与类似的OT、CRDT和共享编辑实现不同的是，这些实现只支持数量非常有限的文档结构或以不同的方式表示它们，而Yjs框架鼓励开发人员构建自定义数据类型。

自定义类型可以使用现有的实现类型（如前所述），以赋予数据上的操作和重现事件的意义。

在撰写本文时，Yjs已经实现了对链表、关联数组、XML、文本和富文本类型的支持。Yjs适用于现代网络浏览器，包括移动设备（Android设备），并提供了一种在网络应用程序中嵌入协作的快速简便方法。

In order to maintain modularity and to be able to employYjs in various Web engineering settings, the communication protocols and the shared data type formats support areimplemented as dedicated interchangeable modules. Thisgreatly simpliﬁes the process of integrating the frameworkinto an existing project, since such projects typically use di-verse communication protocols (e.g., WebRTC, WebSockets, XMPP), and collaborate on various data types and data formats (e.g., XML, JSON, graphs). The support for the different communication protocols is implemented in connector modules. The collection of connector modules and type modules are available as open source JavaScript libraries on GitHub. Currently, connectors are implemented for WebRTC, WebSockets and XMPP.

为了保持模块化并能够在各种Web工程设置中使用YJS，通信协议和共享数据类型格式支持被实现为专用的可互换模块。

这大大简化了将框架集成到现有项目中的过程，因为此类项目通常使用不同的通信协议（如WebRTC、WebSockets、XMPP），并在各种数据类型和数据格式（如XML、JSON、图形）上进行协作。

对不同通信协议的支持在connector 模块中实现。

connector 模块和 type 模块作为开源JavaScript库在GitHub上提供。目前，连接器是为WebRTC、WebSockets和XMPP实现的。
