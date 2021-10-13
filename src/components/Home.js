import React from "react";
import '../css/home.css';
import Security from '../images/Security.jpg';
import {FaRegThumbsDown,FaRegThumbsUp} from 'react-icons/fa';
import {connect} from 'react-redux';


class Home extends React.Component{

    render(){

        const{posts} = this.props;
        const postsData = posts.length ? (

            posts.map(movie =>{

                return(
                                <div id="box1" key={movie.id} className="box-display col-sm-6 col-md-4 col-lg-2 rounded-3 p-2 my-2 mx-1">
                                    <div className="cover"><img src={Security} className="imageF rounded-top mb-2" alt="..."/></div>
                                    <h6 className="py-1 ">{movie.title}</h6>
                                    <p className=" px-1text-muted">{movie.category}</p>
                                        <div className="float-end py-2">
                                            <span className="mx-2"><FaRegThumbsUp/> <span>{movie.likes}</span></span>
                                            <span className="mx-2"><FaRegThumbsDown/> <span>{movie.dislikes}</span></span>
                                        </div>
                                    
                                    
                                </div>
                           
                )
            })
        ): (
            <p>Aucun films pour le moment</p>
        );
        return(
            <div className="page">
                <section className="container-fluid">
                    <div className="row justify-content-center align-items-center">
                        {postsData}
                    </div>  
                </section>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)
