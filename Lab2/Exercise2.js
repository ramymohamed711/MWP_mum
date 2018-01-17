const tree = {
    name: "home",
    files: ["notes.txt", "todo.txt"],
    subFolders: [
        {
            name: "payroll",
            files: ["paper.pdf", "funds.csv"],
            subFolders: []
        },
        {
            name: "misc",
            files: ["summer1.jpg", "summer2.jpg", "summer3.jpg"],
            subFolders: [
                {
                    name: "logs",
                    files: ["logs1", "logs2", "logs3", "logs4"],
                    subFolders: []
                }]
        }]
};


function find(file) {
    var res;
    return (tree) => {
        if (tree["files"].filter(word => word === file).length > 0)
            return true;
        else {
            if (tree.subFolders.length === 0)
                return false
            else
                for (let i = 0; i < tree.subFolders.length && res !== true; ++i) {
                    res = find(file)(tree.subFolders[i]);
                }
        }
        return res;
    }
}

console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false
