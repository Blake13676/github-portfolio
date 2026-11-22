topic = input("Enter a topic (linux, networking, mysql): ")

print(f"\nQuiz Questions for {topic}\n")

if topic.lower() == "linux":
    print("1. What is the Linux kernel?")
    print("2. What command is used to list files in a directory?")
    print("3. Explain the purpose of file permissions.")

elif topic.lower() == "networking":
    print("1. What is the OSI model?")
    print("2. What is the difference between TCP and UDP?")
    print("3. What is an IP address?")

elif topic.lower() == "mysql":
    print("1. What is a primary key?")
    print("2. What is a foreign key?")
    print("3. What is normalization?")

else:
    print("Topic not found.")
