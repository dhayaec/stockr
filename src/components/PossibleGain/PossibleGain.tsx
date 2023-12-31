import React, { Component } from 'react'

interface PossibleGainProps {
    name: string
}

export class PossibleGain extends Component<PossibleGainProps, any> {
    state = {
        price: 0,
        percentage: 0,
        result: 0,
    }

    onChange = (e: React.ChangeEvent<any>): void => {
        this.setState({ [e.target.name]: e.target.value }, () => {
            this.calculate()
        })
    }

    calculate = (): void => {
        const { price, percentage } = this.state
        if (price && percentage && percentage <= 100) {
            const result = (Number(price) * Number(percentage)) / 100
            this.setState({
                result: `${result.toFixed(2)}`,
            })
        }
    }

    render() {
        const { name } = this.props
        const { price, percentage, result } = this.state
        return (
            <div className="text-center my-2">
                <div className="my-1">
                    <h1>{name}</h1>
                </div>
                <div className="flex text-center justify-center">
                    <div className="w-1/2">
                        <input
                            value={price || ''}
                            type="number"
                            name="price"
                            id="price"
                            onChange={this.onChange}
                            placeholder="Price"
                            className="w-full"
                            pattern="\d*"
                        />
                    </div>
                    <div className="w-1/2">
                        <input
                            value={percentage || ''}
                            type="number"
                            name="percentage"
                            id="percentage"
                            onChange={this.onChange}
                            placeholder="Percentage"
                            className="w-full"
                            pattern="\d*"
                            max={100}
                            maxLength={3}
                        />
                    </div>
                </div>
                <div className="flex text-center justify-center py-1">
                    <p className={'text-green-500'}>&#8377; {result}</p>
                </div>
            </div>
        )
    }
}

export default PossibleGain

