import React from 'react';
class Menu extends React.Component {
    render() {
        return (
            <nav id="menu" >
                <ul className="links" >
                    <li>
                        <a href={process.env.PUBLIC_URL}>Home</a>
                    </li> 
                    {this.menu()} 
                </ul> 
            </nav>
        );
    }
    menu = () => {
        if (this.props.arrM.length > 0)
            return (
                this.props.arrM.map((item, i) => <li key={i}><a href={item.link.indexOf('http')>-1?item.link:process.env.PUBLIC_URL+"/"+item.link}>{item.title}</a></li>)
            );
        else
            return (
                this.props.arr.map((item, i) => <li key={i}><a href={item.link.indexOf('http')>-1?item.link:process.env.PUBLIC_URL+"/"+item.link}>{item.title}</a></li>)
            );
    }
}

export default Menu;