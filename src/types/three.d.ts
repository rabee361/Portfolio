declare module 'three' {
    export class Vector2 {
        constructor(x?: number, y?: number)
        x: number
        y: number
        set(x: number, y: number): this
    }

    export class Vector3 {
        constructor(x?: number, y?: number, z?: number)
        x: number
        y: number
        z: number
    }

    export class Color {
        constructor(color?: string | number)
        r: number
        g: number
        b: number
    }

    export class Scene {
        add(object: unknown): void
    }

    export class OrthographicCamera {
        constructor(left: number, right: number, top: number, bottom: number, near?: number, far?: number)
    }

    export interface WebGLRendererParameters {
        antialias?: boolean
        alpha?: boolean
        powerPreference?: 'default' | 'high-performance' | 'low-power'
        precision?: 'highp' | 'mediump' | 'lowp'
        stencil?: boolean
        depth?: boolean
    }

    export class WebGLRenderer {
        constructor(parameters?: WebGLRendererParameters)
        domElement: HTMLCanvasElement
        setSize(width: number, height: number): void
        setPixelRatio(value: number): void
        render(scene: Scene, camera: OrthographicCamera): void
        dispose(): void
        forceContextLoss(): void
    }

    export interface IUniform<TValue = any> {
        value: TValue
    }

    export interface ShaderMaterialParameters {
        vertexShader?: string
        fragmentShader?: string
        uniforms?: Record<string, IUniform>
        transparent?: boolean
        depthWrite?: boolean
        depthTest?: boolean
    }

    export class ShaderMaterial {
        constructor(parameters?: ShaderMaterialParameters)
        uniforms: Record<string, IUniform>
        dispose(): void
    }

    export class PlaneGeometry {
        constructor(width?: number, height?: number)
        dispose(): void
    }

    export class Mesh {
        constructor(geometry?: unknown, material?: unknown)
    }
}