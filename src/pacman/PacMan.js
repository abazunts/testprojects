import React from 'react';
import styles from './pacman.module.css'
import pacMan from '../image/pacman.png'

const Directions = {
    RIGHT: 'right',
    LEFT: 'left',
    UP: 'up',
    DOWN: 'down',
}


class PacMan extends React.Component {


    state = {
        fieldWidth: 600,
        fieldHeight: 600,
        pacManPosition: {valueX: 0, valueY: 0},
        pacManSize: 40,
        directionPacMan: Directions.RIGHT,
        gameStart: false,
    };


    startMove = (x, y) => {
        {
            this.setState({
                gameStart: true
            });
            setInterval(() => {
                if (this.state.directionPacMan === Directions.RIGHT && this.state.pacManPosition.valueX < 560) {
                        this.setState({
                            pacManPosition: {
                                valueX: x++,
                                valueY: y
                            }
                        })
                }

                if (this.state.directionPacMan === Directions.DOWN && this.state.pacManPosition.valueY < 560) {
                        this.setState({
                            pacManPosition: {
                                valueX: x,
                                valueY: y++
                            }
                        })
                }

                if (this.state.directionPacMan === Directions.LEFT && this.state.pacManPosition.valueX > 0) {
                        this.setState({
                            pacManPosition: {
                                valueX: x--,
                                valueY: y
                            }
                        })
                }

                if (this.state.directionPacMan === Directions.UP && this.state.pacManPosition.valueY > 0) {
                        this.setState({
                            pacManPosition: {
                                valueX: x,
                                valueY: y--
                            }
                        })
                }
            }, 5)
        }
    }


    componentDidMount() {
        document.addEventListener('keydown', this.onKeyDown);

    }

    componentWillMount() {
        document.removeEventListener('keydown', this.onKeyDown);
    }

    onKeyDown = (e) => {
        if (e.keyCode === 39) {
            return this.setState({
                directionPacMan: Directions.RIGHT,
                transform: 'rotate(0deg)',
            });
        }
        if (e.keyCode === 38) {
            return this.setState({
                directionPacMan: Directions.UP,
                transform: 'rotate(270deg)',
            });
        }
        if (e.keyCode === 37) {
            return this.setState({
                directionPacMan: Directions.LEFT,
                transform: 'rotate(180deg)',
            });
        }
        if (e.keyCode === 40) {
            return this.setState({
                directionPacMan: Directions.DOWN,
                transform: 'rotate(90deg)',
            });
        }
    };


    render() {
        return <>
            <button
                onClick={() => this.startMove(this.state.pacManPosition.valueX, this.state.pacManPosition.valueY)}
                disabled={this.state.gameStart}>Start
            </button>
            <div className={styles.gameField}>
                <div>
                    <img className={styles.pacManObject} src={pacMan} style={{
                        left: this.state.pacManPosition.valueX + 'px',
                        top: this.state.pacManPosition.valueY + 'px',
                        transform: this.state.transform
                    }}/>
                </div>
            </div>
        </>
    }
};

export default PacMan;