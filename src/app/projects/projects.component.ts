import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  data = [
    {
      description : `
                    Successfully designed and developed a feature-rich Train Booking application using the MEAN stack, 
                    meeting all requirements outlined on the <strong>Unstop platform</strong>. Seamlessly integrated 
                    Angular for an interactive front-end, and harnessed Express.js, Node.js, and MySQL to ensure 
                    efficient data flow and storage. This project showcases my ability to deliver a comprehensive, 
                    end-to-end solution that aligns with industry standards.<br>
                    The Project - <a class="text-decoration-none text-info" target="_blank" href="https://bhavesh1221.github.io/trainbooking/">
                    https://bhavesh1221.github.io/trainbooking/</a><br>
                    Frontend Code - <a class="text-decoration-none text-info" target="_blank" href="https://github.com/bhavesh1221/trainbooking/tree/master">
                    https://github.com/bhavesh1221/trainbooking/tree/master</a><br>
                    Backend Code - <a class="text-decoration-none text-info" target="_blank" href="https://github.com/bhavesh1221/trainbooking_BE">
                    https://github.com/bhavesh1221/trainbooking_BE</a>.
                  `,
      heading: `<a target="_blank" class="text-decoration-none text-white" href="https://bhavesh1221.github.io/trainbooking/"><strong>Train Booking App - Technologies used: HTML, CSS, Angular, NodeJs, ExpressJs, MySQL
                  </strong></a>`
    },
    {
      description: `Electrons is a web application built using the MEAN stack, which includes MongoDB, Express.js, Angular, and Node.js. The application features reactive forms, behavior subject, and API calls to communicate with the backend. It utilizes local storage and cookies to store data on the client-side, and is designed to handle data transfer between the client and the server.
                      Currently, I am working on adding micro-frontend architecture to improve the application's scalability and maintainability.
                        <br>
                        <a class="text-decoration-none text-info" target="_blank" href="https://bhavesh1221.github.io/angular_electrons_web/">https://bhavesh1221.github.io/angular_electrons_web/</a>`,
      heading: `<a class="text-decoration-none text-white" target="_blank" href="https://bhavesh1221.github.io/angular_electrons_web/"><strong>Electrons - Electronics Ecommerce Web App</strong></a>`
    },
    {
      description : `<a class="text-decoration-none text-info" target="_blank" href="https://bhavesh1221.github.io/calculator_dynamic/">https://bhavesh1221.github.io/calculator_dynamic/</a>
                    <br>
                    Built using HTML, CSS, and JavaScript. The calculator has beautiful user interface and is easy to use. It allows users to perform basic arithmetic calculations, including addition, subtraction, multiplication, and division.
                     Which can also be used on Mobile Devices.`,
      heading: `<a class="text-decoration-none text-white" href="https://bhavesh1221.github.io/calculator_dynamic/" target="_blank"><strong>Calculator</strong></a>`
    },
    {
      description : `<a class="text-decoration-none text-info" target="_blank" href="https://bhavesh1221.github.io/TodoListUsingJavaScript/">https://bhavesh1221.github.io/TodoListUsingJavaScript/</a>
                  <br>
                  Task Manager built using HTML, CSS, and JavaScript. The application features a stunning user interface that is intuitive and easy to navigate. With its simple design and efficient functionality, users can easily manage their tasks and stay on top of their to-do list.`,
      heading: `<a class="text-decoration-none text-white" href="https://bhavesh1221.github.io/TodoListUsingJavaScript/" target="_blank"><strong>Task manager</strong></a>`
    },
    {
      description:`<a class="text-decoration-none text-info" href="https://bhavesh1221.github.io/chucknorrisApi/" target="_blank">https://bhavesh1221.github.io/chucknorrisApi/</a>
                <br>
                Created a Basic Page in which Data is Fetched using api, Every Time User Reloads the page the Data is updated with new Information.`,
      heading: `<a class="text-decoration-none text-white" href="https://bhavesh1221.github.io/chucknorrisApi/" target="_blank"><strong>Random Data Generator</strong></a>`
    },
    
  ]

  ngOnInit(): void {
    document.body.style.backgroundColor = "#23252f";
  }

}
