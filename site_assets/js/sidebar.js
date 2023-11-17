window.addEventListener('DOMContentLoaded',function(){
    const checkboxSingleLeftActionsBtn = document.getElementById('leftActionsBtn');
    
    checkboxSingleLeftActionsBtn.addEventListener('change',function(){
        if(this.checked) {
            document.getElementById('leftActionsShow').style.display = 'none';
            document.getElementById('leftActionsHide').style.display = 'block';

            //document.getElementById('main').classList.add('has-project');
        } else{
            document.getElementById('leftActionsShow').style.display = 'block';
            document.getElementById('leftActionsHide').style.display = 'none';

            //document.getElementById('main').classList.remove('has-project');
        } 
    });
});