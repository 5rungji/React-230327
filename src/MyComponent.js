import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <div>
            안녕하세요, 제 이름은 {name}입니다. <br/>
            children 값은 {children}입니다. <br/>
            제가 좋아하는 숫자는 {favoriteNumber} 입니다.
        </div>
    );
};

MyComponent.defaultProps = {
    name: "기본이름"
};

MyComponent.propTypes = {
    name: PropTypes.string, // name은 무조건 문자열의 형태로 전달되어야 한다.
    favoriteNumber: PropTypes.number.isRequired // 필수 propTypes
};

/* 비구조화 할당 문법
    const MyComponent = props => {
        const {name, children} = props; // 비구조화 할당 문법(내부값 바로추출)

        return (
            <div>
                안녕하세요, 제 이름은 {name}입니다. <br/>
                children 값은 {children}
                입니다.
            </div>
        );
    };
    MyComponent.defaultProps = {
        name: "기본이름"
    };
*/

// defaultProps 는 props 값이 따로 지정되지 않았을 때 보여주는 기본값을 설정하는 것.
// {props.children}은 컴포넌트 태그 사이의 내용을 보여주는 props이다.

export default MyComponent;
// 다른 파일에서 이 파일을 import 할 때, 위에 선언한 MyComponent 클래스를 불러오도록 설정한다.