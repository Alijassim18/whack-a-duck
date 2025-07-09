function init(){
    // Alll code goes here

    const gridElem=document.querySelector('.grid')
    const scoreH=document.querySelector('#score-display')

    const cells=[]

    const gridWidth=10
    const numberOfCells=gridWidth * gridWidth

    let duckPosition = 20 //Can put number between 0to99
    let score= 0 

    function addDuck(){
        cells[duckPosition].classList.add('duck')
    }
    function removeDuck(){
        cells[duckPosition].classList.remove('duck')
    }
    function play(){
        setInterval(()=>{
            removeDuck()
            duckPosition=Math.floor(Math.random()*numberOfCells)
            addDuck()
        },3000)
    }
    function handleClick(){
        console.log('Handle click has run!')
        if(event.target.classList.contains('duck')){
            score+=10
            scoreH.textContent=`your score is ${score}`
            console.log(score)
        }
    }

function createGrid(){
    // for every cell that we require create a div
    // append this cell to our grid
    for(let i=0;i<numberOfCells;i++){
        const cell=document.createElement('div')
        // cell.classList.add('duck')


        cell.textContent=i
        cell.addEventListener('click',handleClick)
        cells.push(cell)
        gridElem.appendChild(cell)
    }
 console.log(cells)

}
   createGrid()
   play() 

}

document.addEventListener('DOMContentLoaded',init)




// to update the score we need add event listen to cells && handel click fun to add tpo score in the cells confains a duck