import React, { Component } from 'react'

export class YouTubeDebugger extends Component {

    constructor() {
        super()
        this.state = {
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                    resolution: '1080p'
                }
            }
        }
    }

    handleBitrateClick = event => {
        this.setState(prevState => {
            return {
                ...prevState,
                settings : {
                    ...prevState.settings,
                    bitrate: 12,
                }
            }
        })
    }

    handleResolutionClick = event => {
        this.setState(prevState => {
            return {
                ...prevState,
                settings: {
                    ...prevState.settings,
                    video: {
                        ...prevState.settings.video,
                        resolution: '720p'
                    }
                }
            }
        })
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Bitrate: {this.state.settings.bitrate}</button>
                <button className="resolution" onClick={this.handleResolutionClick}>Resolution: {this.state.settings.video.resolution}</button>
            </div>
        )
    }
}

export default YouTubeDebugger
