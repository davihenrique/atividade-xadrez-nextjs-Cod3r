import styles from './xadrez.module.css'

export default function xadrez(){


    return(
        <>
       <div style={{
        marginLeft : '30%',
        marginTop: '5%'
        }}>{
            colunas()
        }
        </div>   
        </>
    )
}


function colunas(){
        var primaryColor = true;
        const arr = []

        for(let i = 1; i <= 8; i++ ){

            arr.push( linha(primaryColor))
            primaryColor = !primaryColor
    }

    return arr;
}


function linha(colorInitParam){
    const arr = [];
    var colorInit = colorInitParam; 

    arr.push(<div style={{display: 'flex'}}>
        {
        percasLinhas(colorInit)
        }
    </div>)

    return arr;
}


function percasLinhas(colorInitParam){
        const arr = []
        var colorInit = colorInitParam;
        for(let i = 1; i <= 8; i++ ){

            arr.push(   
            <div className={colorInit?styles.white:styles.black} style={{float:'right'}}></div>
        )

        colorInit = !colorInit;
    }

    return arr
}

