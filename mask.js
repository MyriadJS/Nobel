function cornerObj(width, height) {
  return {
    topLeft: [0, 0],
    topRight: [width, 0],
    bottomLeft: [0, height ],
    bottomRight: [width, height],
  }
}

function bottomLeft(ctx, width, height, radius) {
  const { bottomLeft, bottomRight, topLeft } = cornerObj(width, height)
  ctx.moveTo(...topLeft)
  ctx.arcTo(...bottomLeft, ...bottomRight, radius)
  ctx.lineTo(...bottomLeft)
  ctx.lineTo(...topLeft)
}

function bottomRight(ctx, width, height, radius) {
  const { bottomLeft, bottomRight, topRight } = cornerObj(width, height)
  ctx.moveTo(...topRight)
  ctx.arcTo(...bottomRight, ...bottomLeft, radius)
  ctx.lineTo(...bottomRight)
  ctx.lineTo(...topRight)
}

function topLeft(ctx, width, height, radius) {
  const { bottomLeft, topLeft, topRight } = cornerObj(width, height)
  ctx.moveTo(...bottomLeft)
  ctx.arcTo(...topLeft, ...topRight, radius)
  ctx.lineTo(...topLeft)
  ctx.lineTo(...bottomLeft)
}

function topRight(ctx, width, height, radius) {
  const { bottomRight, topLeft, topRight } = cornerObj(width, height)
  ctx.moveTo(...bottomRight)
  ctx.arcTo(...topRight, ...topLeft, radius)
  ctx.lineTo(...topRight)
  ctx.lineTo(...bottomRight)
}

registerPaint('inverse-radius', class {
  static get inputProperties() {
    return [
        '--inverse-radius',
        '--inverse-radius-direction'
    ]
  }
  paint(ctx, sizes, props) {
    const height = sizes.height
    const width = sizes.width
    const radius = parseInt(props.get('--inverse-radius').toString());
    const direction = props.get('--inverse-radius-direction').toString()

    ctx.beginPath()
    ctx.lineWidth = 0

    switch (direction) {
      case 'top-left':
        topLeft(ctx, width, height, radius)
        break
      case 'top-right':
        topRight(ctx, width, height, radius)
        break
      case 'bottom-left':
        bottomLeft(ctx, width, height, radius)
        break
      case 'bottom-right':
        bottomRight(ctx, width, height, radius)
        break
    }

    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }
})
