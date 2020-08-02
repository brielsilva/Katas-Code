
    /*  First Attempt Ugly  */
function filter_list(list) {
    return list.filter(value => {
        if(!(value)) return true;
        else if(Number.isInteger(value)) return true
        
    })
}


    /* Second Attempt   */
    /* I tried this before, but the number 0 as not showing up */
    /* Realize that i is returning 0 with is a false in engine of javascript*/
    /* Returning true or null is much more secure   */
function filter_list(list) {
    return list.filter(value => Number.isInteger(value) ? true : null);
        
}




console.log(filter_list(['a','1',1,0,2,3]));