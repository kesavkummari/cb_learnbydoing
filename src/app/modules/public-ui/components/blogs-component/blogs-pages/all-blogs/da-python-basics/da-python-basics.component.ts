import { Component } from '@angular/core';

@Component({
  selector: 'app-da-python-basics',
  templateUrl: './da-python-basics.component.html',
  styleUrls:['../blog-template.component.css']
})
export class DaPythonBasicsComponent {
  // copyCode(event: any) { 
  //   const code = event.target.previousElementSibling.innerText; 
  //   navigator.clipboard.writeText(code).then(() => {
  //     const button = event.target; 
  //     button.innerText = 'Copied!'; 
  //     setTimeout(() => { 
  //       button.innerText = 'Copy'; 
  //     }, 2000); 
  //   }); 
  // }

  async copyCode(event: any): Promise<void> { 
    const codeContent = document.getElementById('code-content')!.innerText; 
    try { 
      await navigator.clipboard.writeText(codeContent); 
      const button = event.target; 
      button.innerText = 'Copied!'; 
      setTimeout(() => { 
              button.innerText = 'Copy'; 
            }, 2000); 
    } catch (err) { 
      console.error('Failed to copy: ', err); 
      alert('Failed to copy the code.'); 
    } 
  }
}
