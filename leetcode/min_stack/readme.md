- 数组的操作
1. push('')顶部添加成员 
   pop()顶部出栈，返回成员值
1. unshift('')底部添加成员
   shift()底部出栈，返回成员值

   FIFO
   CPU 的底层
   写代码，放音乐，聊天
   进程，正在执行的程序，   分时分片 
   CPU计算 同一时刻只有一个程序运行，运行时钟。
   
程序是怎么运行的？为什么程序会崩溃？
代码文本 保存在文件系统中fs 
index.c 编译器 ->index.o
文件 内存 I/O
CPU 分配空间 成为独立的进程 
365？ 
 运行先后，排队
 空间不够
 进程的三个状态：
 运行 就绪 阻塞
 代码（程序）是顺序执行
 CPU 分时分片，切换操作
 tomcat 独立的进程
 进程切换消耗很大
 线程 可以独立执行
 web 
 tomcat 多线程
 分布式

 - 冯诺依曼原理
 代码 文件 -> compile编译 -> 可执行文件 文件系统
 - cpu分时分片
    执行可执行文件
    进程 由操作系统负责调度 
    并行 多个进程在由CPU切换
 - 进程切换消耗大 
    线程 
    *.java *.javac
    创建线程 启动多线程
 - tomcat 
    为每个访问者创建线程
    每个线程有独立的资源，内存
    占据越来越多的内存空间 不释放 处于阻塞状态：
        - 分配线程数量到达上限 
        - 线程为了就绪，分配的内存，达到服务器的物理上限时，也会阻塞
 - 分布式的概念
    动态扩容 nginx
    加服务器  负载均衡 

                
 
