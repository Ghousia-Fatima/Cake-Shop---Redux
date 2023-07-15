import React from 'react'
import { connect } from 'react-redux'
import { buy_cake } from './cakeActions'

function CakeCounter2(props) {
  return (
    <div>
        <h2>Cake Counter 2</h2>
        <h3>No of Cakes: {props.noOfCakes}</h3>

        <button className='btn btn-primary' onClick={props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        noOfCakes:state.cake.noOfCakes
    }
}

const mapDispatchToProps = (dispatch)=> {
    return{
      buyCake: ()=>{
        dispatch(buy_cake())
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeCounter2);