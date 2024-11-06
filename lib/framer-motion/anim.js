
export const hamburgerline1 ={
    initial:{

    },
    show:{
        x:0,
        y:12,
        rotate : 45,
        backgroundColor:'#139A68'
    }
}
export const hamburgerline2 ={
    initial:{

    },
    show:{
        x:0,
        y:1,
        rotate : -45,
        width : 45,
        backgroundColor:'#139A68'
    
    }
}
export const hamburgerline3 ={
    initial:{

    },
    show:{
        x:-14,
        y:-10,
        width : 0,
        opacity: 0,
        backgroundColor:'#139A68'
    }
}

export const navbar = {
    initial:{
        x:1000,
        transition:{spring:0,bounce:0}
    },
    show :{
       x:0,
       transition:{spring:0,bounce:0}
    },
    end :{
        x:1000,
        transition:{duration:0.4}
    }

}