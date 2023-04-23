import React, {Component} from 'react';

class Counter extends Component{
    // constructor(props){
    //     super(props); //state의 초기값 설정하기
    //     this.state = {
    //         number: 0,
    //         fixedNumber:0
    //     };
    // }
    state = {
        number: 0,
        fixedNumber:0
    } //이럴 경우 constructor 메서드 선언없이 state 초깃값 설정가능
    render(){
        const {number, fixedNumber} = this.state; //state를 조회할 때는 this.state로 조회한다.
        return(
            <div>
                <h1>{number}</h1>
                <h2>바뀌지 않는 값: {fixedNumber}</h2>
                <button //onClick을 통해 버튼이 클릭되었을 때 호출할 함수를 지정
                onClick = {()=>{ // this.setState를 사용하여 state에 새로운 값을 넣을 수 있다.
                    // this.setState({number:number+1})
                    this.setState(prvState => {
                        return{
                            number: prvState.number + 1
                        };
                    });
                    this.setState(prvState => {
                        return{
                            number: prvState.number + 1
                        };
                    });
                }}                
                > 
                    +1 
                </button>
            </div>
        )
    }
}

export default Counter;