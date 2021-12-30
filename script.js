console.log('Script running.....');

// const cross=document.querySelector('.cross');
// cross.style.display='none';
// const ham=document.querySelector('.ham')
// ham.addEventListener('click',()=>{
//     const sidebar=document.querySelector('.sidebar')
// const sidebarGo=document.querySelector('.sidebar').classList.toggle('sidebarGo')
// if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
//     document.querySelector('.ham').style.display='inline'
//     document.querySelector('.cross').style.display='none'
// }
// else{
//     document.querySelector('.cross').style.display='inline'
//     document.querySelector('.ham').style.display='none'
// }
// })


document.querySelector('.cross').style.display='none'

document.querySelector('.ham').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        setTimeout(() => {
            
            document.querySelector('.cross').style.display='inline'
        }, 300);
        document.querySelector('.ham').style.display='none'

    
    }
})


document.querySelector('.cross').addEventListener('click',()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo')
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').style.display='inline'
        document.querySelector('.cross').style.display='none'
    }
    else{
        setTimeout(() => {
            
            document.querySelector('.cross').style.display='inline'
        }, 300);
        document.querySelector('.ham').style.display='none'

    
    }
})