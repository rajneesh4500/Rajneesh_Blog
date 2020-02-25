const blog1 = {
  header: "What is Internet?",
  questions: [
    {
      Q: "What is Internet?",
      A:
        "According to google, Internet is a global network of computers providing a variety of information and communicating facilities, consisting of interconnected networks using standard protocol."
    },
    {
      Q: "How a computer in this network is identified?",
      A: `Every device which can connect to internet has an address associated with it called the IP address. 
            This is a unique address and is of the format nnn.nnn.nnn.nnn where n ranges from 0-255. 
            This format is IPv4 and can support around 4 billion unique addresses. IP can be assigned by the ISP provider or it can have a permanent IP if connected over LAN or it may obtain a temporary IP over DHCP. IP is a connectionless protocol, meaning it is a form of data transmission in which the signal goes out even without determining if the receiver is ready to receive the signal or not,
            it does not care if the signals are interpreted or even reaches the destination.`
    },
    {
      Q: "How is an IP address Resolved?",
      A:
        "Whenever we type in a address how does the browser know which part of the internet to navigate to? Once the address is entered it is looked up in DNS(domain name service), a distributed database which keeps tracks of domain names and their IP addresses, and an IP address is obtained using which our computer locates that particular computer and then the information transfer takes place."
    }
  ],
  keyPoints: [
    "Domain- Internet address or name using which people can access a website. Domain name is unique.",
    "ISP- Internet Service Provider, these are the guys who provide us a path to connect to the internet. ISP uses TCP/IP protocol to make connections between computers possible and allow transmission of data."
  ],
  resources: [
    "https://www.computerhope.com/jargon/i/ip.htm",
    "https://web.stanford.edu/class/msande91si/www-spr04/readings/week1/InternetWhitepaper.htm"
  ]
};

export default blog1;
