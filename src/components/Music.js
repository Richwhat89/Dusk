import React,{Component} from 'react';
import Sound from 'react-sound';


class Music extends Component{
    render(){
        return(
            <Sound
                url='Dubstep.mp3'
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}/>
        )
    }
}

export default Music;