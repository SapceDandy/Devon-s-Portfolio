import { SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC(){

    return (
        <div id = {idName} className = {`app__container ${classNames}`}>
            <div className = "app__wrapper app__flex">
                <Component />   
            </div>
            {/*(classNames === "paralaxBackground") && (<div className = {classNames}></div>)*/}
        </div>
    )
}

export default AppWrap;