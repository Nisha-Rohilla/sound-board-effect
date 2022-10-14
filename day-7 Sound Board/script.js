let sounds = ['applause','boo','tada','gasp','victory','wrong']

sounds.forEach(array =>{
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = array;
    
    btn.addEventListener('click',()=>{
        stopSound();
        document.getElementById(array).play()
    })
    document.getElementById('button').appendChild(btn)
})

function stopSound(){
    sounds.forEach(e=>{
        const music = document.getElementById(e)
        music.pause()
        music.currentTime = 0;
    })
}
// const forEach = (array, callback) => {
// 	for(let i=0; i<array.length; i++){
//     callback(array[i])
//   }
// };

