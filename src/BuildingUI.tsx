import * as THREE from 'three'
import { useBuildingStore } from './useLineDrawing'
import './BuildingUI.css'

export default function BuildingUI() {
    const { points, setPoints, height, setHeight, isClosed, reset, isDrawing, setIsDrawing , setColorLine, setColorExtrude } = useBuildingStore()

    const updatePoint = (index: number, axis: 'x' | 'z', value: number) => {
        const updated = points.map((p, i) =>
            i === index
                ? new THREE.Vector3(axis === 'x' ? value : p.x, p.y, axis === 'z' ? value : p.z)
                : p
        )
        setPoints(updated)
    }

    return (
        <div className="main-ui">
            <h3>Building Edit</h3>
            <button onClick={() => setColorLine('blue')}>Blue Line</button>
            <button onClick={() => setColorLine('red')}>Red Line</button>
            <button onClick={() => setColorLine('green')}>Green Line</button>

            <button onClick={() => setColorExtrude('blue')}>Blue Extrusion</button>
            <button onClick={() => setColorExtrude('red')}>Red Extrusion</button>
            <button onClick={() => setColorExtrude('green')}>Green Extrusion</button>

            <button onClick={() => setIsDrawing(!isDrawing)}>
                {isDrawing ? '🛑 Exit Drawing Mode' : '✏️ Activate Drawing'}
            </button>

            {isClosed && height === null && (
                <>
                    <h4>Height:</h4>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                        <input
                            type="number"
                            id="altura"
                            placeholder="Introduce altura"
                            style={{
                                width: 100,
                                padding: '5px',
                                borderRadius: '4px',
                                border: '1px solid #aaa',
                            }}
                        />
                        <button
                            onClick={() => {
                                const input = document.getElementById('altura') as HTMLInputElement
                                const value = parseFloat(input.value)
                                if (!isNaN(value)) setHeight(value)
                            }}
                            style={{
                                padding: '6px 10px',
                                borderRadius: '5px',
                                border: 'none',
                                background: '#90ee90',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                        >
                            Accept
                        </button>
                    </div>
                </>
            )}

            {isClosed && height && (
                <>
                    <h4>Points:</h4>
                    {points.map((p, i) => (
                        <div key={i} style={{ marginBottom: 8 }}>
                            Point {i + 1}
                            <input
                                type="number"
                                value={p.x}
                                step={0.1}
                                onChange={(e) => updatePoint(i, 'x', parseFloat(e.target.value))}
                                style={{ width: 60, marginLeft: 8 }}
                            />
                            <input
                                type="number"
                                value={p.z}
                                step={0.1}
                                onChange={(e) => updatePoint(i, 'z', parseFloat(e.target.value))}
                                style={{ width: 60, marginLeft: 8 }}
                            />
                        </div>
                    ))}
                </>
            )}

            <button style={{ marginTop: 10 }} onClick={reset}>🔄 Reset</button>
        </div>
    )
}
