/*
* 链表翻转
* */
function linkReverse(head) {
    let curr = head;
    let res = null;
    while (curr) {
        let next = curr.next;
        curr.next = res;
        res = curr;
        curr = next;
    }
    return res;
}

/*
* 判断链表是否有环
* */
function hasCycle(head) {
    let one = head;
    let two = head;
    while (two && two.next){
        one = one.next;
        two = two.next.next;
        if(one === two){
            return true;
        }
    }
    return false;
}
