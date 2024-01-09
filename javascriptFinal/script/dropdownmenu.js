let availableKeyWords = [
    'AsusVivobookGo14flip',
    'HPVictus16',
    'HPProBook450G9',
    'HPNotebook240G8',
    'HPOmen16',
    'HPpavilion14',
    'AsusZenbook14Flip',
    'AsusROGStrix17',
    'rogzephyruss15',
    'AsusVivobookX',
    'delllatitude3340',
    'dellxps13',
    'dellg15',
    'dellxps9530',
    'MSIBravo9S7',
    'MSICrosshair15',
    'MSIKatanaGF66',
    'MSIKatanaGF76',
];

const resultBox = document.querySelector(".result-box");
const inputBox = document.querySelector("#input-box");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;

    if(input.lenght){
        result = availableKeyWords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);
}

function display(result){
    const content = result.map((list)=>{
        return "<li>" + list + "</li>";
    });

    resultBox.innerHTML = "<ul>" + content.join('') + "</ul>";

}
