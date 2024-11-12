return
function azure_word(selected_text){
    return new Promise((resolove) => {
        setTimeout(() => {
            resolove(Math.floor(Math.random() * 101))
        },1000)
    }) 
        
    
};
