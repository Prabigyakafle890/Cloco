#task 1- making a directory in home/prabigyakafle 
mkdir project_filess



#task 2 -User group and management
groupname= developers
username= intern_user

#create a new group
if !getent group "$groupname";then
sudo groupadd "$groupname"
else
echo "Group already exists"
fi

#create a new user
if !id "$username"; then
sudo useradd -m "$username"
else 
echo "User already exists."
fi

#checking if the user exists
id $username

#setting up password 
echo "intern_user:cloconepal@123" | sudo  chpasswd
echo "Password changed successfully!"



#task4- creating welcome.txt inside project_filess and writing the specified content in it.

dir_name=project_filess
file_name=welcome.txt

# validating the existence of directory
if [ -d "$dir_name" ]; then
 echo "Directory exists."

# creating the file
 touch "$dir_name/$file_name"
 echo "$file_name created inside $dir_name."
fi

file_path=$dir_name/$file_name

# getting the required details


creationdate="2025-04-02"
creationtime="15:16"

dirpath=$(realpath "$dir_name")

#group_owner= $(ls -ld "$dir_name" | awk '{print $3, $4}')

#writing into the file
echo "Creation date: $creationdate">> "$file_path"
echo "Creation time: $creationtime">> "$file_path"
echo "File path": "$file_path">> "$file_path"
echo "Directory path: $dirpath">>"$file_path"
echo "Group and Owner: "$group_owner">>"$file_path"

#Setting appropriate permissions
chmod 755 welcome.txt
echo"Appropriate persmissions set."



#task3- Permission and ownership

user_name=intern_user

dir_name=project_filess

group_name=developers

#changing the ownership to intern_user

sudo chown "$user_name" "$dir_name"
echo "Owner changed to $user_name!"

#changing the group to developers

sudo chgrp "$group_name" "$dir_name"
echo "Group changed to $group_name!"

 # ownwer can read, write and execute and groups can read and execute and others have no permission
sudo chmod 750 "$dir_name"



echo "Permission set as specified!" 
