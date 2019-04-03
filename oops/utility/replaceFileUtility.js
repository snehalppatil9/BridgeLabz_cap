module.exports={
    replaceFile(name, fullName, num, day,fileRead) {
        // '/g'  is used to replace all the matching values
        fileRead = fileRead.replace("<<name>>", name);
        fileRead = fileRead.replace(/<<fullName>>/g, fullName);
        fileRead = fileRead.replace(/xxxxxxxxxx/g, num);
        fileRead = fileRead.replace(/xx-xx-xxxx/g, day);       
        return fileRead;
}
}