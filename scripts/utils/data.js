export const publicationsData = [
    {
        image: "./images/Publication/pub24.png",
        authors: "Egor Nevezhin, Nikolay Butakov, Maria Khodorchenko, Maxim Petrov, Denis Nasonov",
        text: "Online advertising is one of the most widespread ways to reach and increase a target audience for those selling products. Usually having a form of a banner, advertising engages users into visiting a corresponding webpage. Professional generation of banners requires creative and writing skills and a basic understanding of target products. The great variety of goods presented in the online market enforce professionals to spend more and more time creating new advertisements different from existing ones. In this paper, we propose a neural network-based approach for the automatic generation of online advertising using texts from given webpages as sources. The important part of the approach is training on open data available online, which allows avoiding costly procedures of manual labeling. Collected open data consist of multiple subdomains with high data heterogeneity. The subdomains belong to different topics and vary in used vocabularies, phrases, styles that lead to reduced quality in adverts generation. We try to solve the problem of identifying existed subdomains and proposing a new ensemble approach based on exploiting multiple instances of a seq2seq model. Our experimental study on a dataset in the Russian language shows that our approach can significantly improve the quality of adverts generation.",
        title: "Topic-driven Ensemble for Online Advertising Generation",
        url: "https://aclanthology.org/2020.coling-main.206/",
    },
    {
        image: "./images/Publication/pub5.png",
        authors: "Ksenia D Mukhina, Alexander A Visheratin, Denis Nasonov",
        text: "In this work, we consider a problem of predicting the next state of a given area using retrospective information. The proposed concept of hierarchical context transfer (HCT) operates on several spatial levels of the input data to overcome major issues of next state prediction problems-density variability, a significant difference between consecutive states and computational complexity. The custom loss function allows assimilating contexts of spatial levels into each other to further improve prediction quality. The proposed deep learning model (HCT-CNN) allows generating precise high-resolution predictions of the target area. We evaluate our model on the use case of predicting the next state of the urban area using a large dataset for six cities-New York, Moscow, London, Tokyo, Saint Petersburg, and Vienna. Experimental results demonstrate that HCT-CNN generates low-and high-resolution predictions of better quality",
        title: "Convolutional neural networks with hierarchical context transfer for high-resolution spatiotemporal predictions",
        url: "https://dl.acm.org/doi/abs/10.1145/3423336.3429346",
    },
    {
        image: "./images/Publication/pub21.png",
        authors: "Ksenia Mukhina, Alexander Visheratin, Denis Nasonov",
        text: "One of the areas that gathers momentum is the investigation of location-based social networks (LBSNs) because the understanding of citizens’ behavior on various scales can help to improve quality of living, enhance urban management, and advance the development of smart cities. But it is widely known that the performance of algorithms for data mining and analysis heavily relies on the quality of input data. The main aim of this paper is helping LBSN researchers to perform a preliminary step of data preprocessing and thus increase the efficiency of their algorithms. To do that we propose a spatiotemporal data processing pipeline that is general enough to fit most of the problems related to working with LBSNs. The proposed pipeline includes four main stages: an identification of suspicious profiles, a background extraction, a spatial context extraction, and a fake transitions detection. Efficiency of the",
        title: "Spatiotemporal filtering pipeline for efficient social networks data processing algorithms",
        url: "https://link.springer.com/chapter/10.1007/978-3-030-50433-5_7",
    },
    {
        image: "./images/Publication/pub14.png",
        authors: "Mikhail Melnik, Ivan Dolgov, Denis A Nasonov",
        text: "Scheduling of workload in distributed computing systems is a well-known optimization proble. A workload may include single independent software packages. However, the computational process in scientific and industrial fields is often organized as composite applications or workflows which are represented by collection of interconnected computing packages that solve a common problem. We identified three common computing modes: batch, stream and iterative. The batch mode is a classic way for one-time execution of software packages with an initially specified set of input data. Stream mode corresponds to launch of a software package for further continuous processing of active data in real time. Iterative mode is a launching of a distributed application with global synchronization at each iteration. Each computing mode has its own specifics for organization of computation process. But at the moment, there are new problems that require organization of interaction between computing modes (batch, stream, iterative) and to develop optimization algorithms for this complex computations that leads to formation of heterogeneous workflows. In this work, we present a novel developed hybrid intellectual scheme for organizing and scheduling of heterogeneous workflows based on evolutionary computing and reinforcement learning methods.",
        title: "Hybrid Intellectual Scheme for Scheduling of Heterogeneous Workflows based on Evolutionary Approach and Reinforcement Learning.",
        url: "https://www.scitepress.org/Papers/2020/101128/101128.pdf",
    },
    {
        image: "./images/Publication/pub7.png",
        authors: "Alexandr Zamiralov, Maria Khodorchenko, Denis Nasonov",
        text: "Social media stores a significant amount of information which can be used for extraction of specific knowledge. A variety of topics that arise there concerns a lot of everyday life aspects, including urban-related problems. In this work, we demonstrate the way of using the texts from social media on the topic of housing and utility problems, such as litter on the streets, graffiti on a public building or noisy neighbours. Our aim is to develop an approach based on machine learning to automatically filter such citizen messages and classify them into several categories. To achieve this, we solve the classification problem with an almost unlimited number of negative categories using the One-Class approach and combine data from several resources to construct proper text embedding by combining results from the guided topic model and deep neural pretrained BERT method. Comparison with statistics taken from the official",
        title: "Detection of housing and utility problems in districts through social media texts",
        url: "https://www.sciencedirect.com/science/article/pii/S1877050920323978",
    },
    {
        image: "./images/Publication/pub6.png",
        authors: "Mariia Koreneva, Alexander A Visheratin, Denis Nasonov",
        text: "We present a new approach to large-scale supervised heterogeneous graph classification. We decouple a large heterogeneous graph into smaller homogeneous ones. In this paper, we show that our model provides results close to the state-of-the-art model while greatly simplifying calculations and makes it possible to process complex heterogeneous graphs on a much larger scale.",
        title: "Decoupling graph convolutional networks for large-scale supervised classification",
        url: "https://www.sciencedirect.com/science/article/pii/S1877050920324133",
    },

]