import React from 'react'
import { connect } from 'react-redux'
import { build_cake, buy_cake } from './cakeActions'

function CakeCounter1(props) {
  return (
    <div>
        <h2>Cake Counter 1</h2>
        <h3>No of Cakes: {props.noOfCakes}</h3>

        <button className='btn btn-primary' onClick={props.buyCake}>Buy Cake</button>

        <button className='btn btn-success mx-3' onClick={props.buildCake}>Build Cake</button>
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
      },
      buildCake: ()=>{
        dispatch(build_cake())
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeCounter1);