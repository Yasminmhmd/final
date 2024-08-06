const counts = document .querySelectorAll(`.count`)
const speed = 97
counts.forEach(
    (counter) => {
        function upData(){
            const target = Number(counter .getAttribute(`data-target`))
            const count = Number(counter.innertext)
            const inc = target / speed
            if(count < target){
                counter.innertext =Math.floor(inc + count)
                setTimeout(upData,1)
            }
            else{
                counter.innertext =target
            }
        }
        upData()
    }
)