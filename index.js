function getName(node) {
    return node.name
}

function headNode(linkedList, collection) {
    return collection[linkedList]
}

function next(head, collection) {
    return collection[head.next]
}

function nodeAt(index, linkedList, collection) {
    let node = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        node = next(node, collection)
    }
    return node
}

function addressAt(index, linkedList, collection) {
    if (index === 0) {
        return linkedList
    } else {
        let node = headNode(linkedList, collection)
        for (let i = 0; i < index - 1; i++) {
            node = next(node, collection)
        }
        return node.next
    }
}

function indexAt(findNode, collection, linkedList) {
    let count = 0
    let node = headNode(linkedList, collection)
    while (node.next !== null) {
        if (node.name === findNode.name) {
            return count
        }
        node = next(node, collection)
        count += 1
    }
}

function insertNodeAt(index, key, linkedList, collection) {
    const previous = nodeAt(index - 1, linkedList, collection)
    collection[key].next = previous.next
    previous.next = key
}

function deleteNodeAt(index, linkedList, collection) {
    nodeAt(index - 1, linkedList, collection).next = addressAt(index + 1, linkedList, collection)
}
