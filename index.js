// <-------------- json data manipulation --------------> 

// <--------------     WORK DATA      --------------> 
// <-------------- START DAY DATA FECTH --------------> 

document.getElementById("dayOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[0].timeframes.daily.current
                let show2= json[0].timeframes.daily.previous
                document.getElementById("WorkShow1").innerHTML = `${show1} Hrs`
                document.getElementById("WorkShow2").innerHTML = `Yesterday - ${show2} hours`
        }            
    obtenerDatos();
}
 // <-------------- END DAY DATA FECTH --------------> 


// <-------------- START WEEK DATA FECTH --------------> 

document.getElementById("weekOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[0].timeframes.weekly.current
                let show2= json[0].timeframes.weekly.previous
                document.getElementById("WorkShow1").innerHTML = `${show1} Hrs`
                document.getElementById("WorkShow2").innerHTML = `Last Week - ${show2} hours`
        }            
    obtenerDatos();
}
 // <-------------- END WEEK DATA FECTH --------------> 

 // <-------------- START MONTH DATA FECTH --------------> 

document.getElementById("monthOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[0].timeframes.monthly.current
                let show2= json[0].timeframes.monthly.previous
                document.getElementById("WorkShow1").innerHTML = `${show1} Hrs`
                document.getElementById("WorkShow2").innerHTML = `Last Month - ${show2} hours`
        }            
    obtenerDatos();
}
 // <-------------- END MONTH DATA FECTH --------------> 

/* 
// <--------------     PLAY DATA      --------------> 

// <-------------- START DAY DATA FECTH --------------> 

 document.getElementById("dayOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[1].timeframes.daily.current
                let show2= json[1].timeframes.daily.previous
                document.getElementById("playShow1").innerHTML = `${show1} Hrs`
                document.getElementById("playShow2").innerHTML = `Yesterday - ${show2} hours`
        }            
    obtenerDatos();
}
 // <-------------- END DAY DATA FECTH --------------> 


// <-------------- START WEEK DATA FECTH --------------> 

document.getElementById("weekOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[1].timeframes.weekly.current
                let show2= json[1].timeframes.weekly.previous
                document.getElementById("playShow1").innerHTML = `${show1} Hrs`
                document.getElementById("playShow2").innerHTML = `Last Week - ${show2} hours`
        }            
    obtenerDatos();
}
 //<-------------- END WEEK DATA FECTH --------------> 

//<-------------- START MONTH DATA FECTH --------------> 

document.getElementById("monthOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[1].timeframes.monthly.current
                let show2= json[1].timeframes.monthly.previous
                document.getElementById("playShow1").innerHTML = `${show1} Hrs`
                document.getElementById("playShow2").innerHTML = `Last Month - ${show2} hours`
        }            
    obtenerDatos();
}
//<-------------- END MONTH DATA FECTH --------------> 


 //<--------------     STUDY DATA      --------------> 

 //<-------------- START DAY DATA FECTH --------------> 

document.getElementById("dayOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[2].timeframes.daily.current
                let show2= json[2].timeframes.daily.previous
                document.getElementById("studyShow1").innerHTML = `${show1} Hrs`
                document.getElementById("studyShow2").innerHTML = `Yesterday - ${show2} hours`
        }            
    obtenerDatos();
}
//<-------------- END DAY DATA FECTH --------------> 


//<-------------- START WEEK DATA FECTH --------------> 

document.getElementById("weekOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[2].timeframes.weekly.current
                let show2= json[2].timeframes.weekly.previous
                document.getElementById("studyShow1").innerHTML = `${show1} Hrs`
                document.getElementById("studyShow2").innerHTML = `Last Week - ${show2} hours`
        }            
    obtenerDatos();
}
// <-------------- END WEEK DATA FECTH --------------> 

//<-------------- START MONTH DATA FECTH --------------> 

document.getElementById("monthOnClick").onclick= function () {
    async function obtenerDatos () {
        const RESPONSE = await fetch ("http://127.0.0.1:5500/data.json")
                const json = await RESPONSE.json()
                let show1= json[2].timeframes.monthly.current
                let show2= json[2].timeframes.monthly.previous
                document.getElementById("studyShow1").innerHTML = `${show1} Hrs`
                document.getElementById("studyShow2").innerHTML = `Last Month - ${show2} hours`
        }            
    obtenerDatos();
}
//<-------------- END MONTH DATA FECTH --------------> 

 */