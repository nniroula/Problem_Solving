// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if(message.length > letters.length) return false;

    let chars = letters.split('');

    for(let i = 0; i < message.length; i++){
        let index = chars.indexOf(message[i]);

        if(index !== -1){
            chars.splice(index, 1);
        }else{
            return false;
        }
    }
    return true;
}
