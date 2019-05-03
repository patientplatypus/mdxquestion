import React, {Component} from 'react'

import Content from '../../components/MDX/Content1.mdx'

import axios from 'axios'

class Home extends Component{
  static async getInitialProps({req}){
    console.log('inside getInitialProps')
    console.log('*************************************')
    return({postData: "yolo"})
    // if(req){
    //   console.log('req is true~')
    // }else{
    //   console.log('req is not true~')
    // }

    // if(req){
    //   let url = 'http://localhost:5000/content1'
    //   console.log('value of url: ', url)
    //   var postReturn = await axios.get(url)
    //   .then(response=>{
    //     console.log('data response from Node: ', response.data)
    //     return response.data
    //   })
    //   .catch(error=>{
    //     console.log('error from Node: ', error)
    //     return({})
    //   })
    // }
    // return({postData: postReturn})
  }

  componentDidMount(){
    console.log('inside componentDidMount of HomePage')
    console.log('value of this.props: ', this.props)
  }

  render(){
    return(
      <div>
        <div style={{height: '100vh', width: '30vw', marginLeft: '1vw', background: 'skyblue', display: 'inline-block'}}>
          <textarea>
            
          </textarea>
        </div>
        <div style={{height: '100vh', width: '30vw', marginLeft: '1vw', background: 'grey', display: 'inline-block'}}>
          <Content/>
        </div>
      </div>
    )
  }
}

export default Home