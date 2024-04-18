document.addEventListener('DOMContentLoaded',()=>{

    const switcherTheme=document.querySelector('.check');
    const root=document.documentElement;

    if(root.getAttribute('data-tema')==='dark'){
        switcherTheme.checked=true;
    }

    switcherTheme.addEventListener('click',toggleTheme);

    function toggleTheme(){
        const setTheme=switcherTheme.checked? 'dark' : 'light';

        root.setAttribute('data-tema', setTheme);
        localStorage.setItem('tema',setTheme);
    }
});