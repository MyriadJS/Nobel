function cornersxx(width, height) {
  return {
    topLeft: [0, 0],
    topRight: [width, 0],
    bottomLeft: [0, height ],
    bottomRight: [width, height],
  }
}

function bottomLeft(ctx, width, height, radius) {
  const { bottomLeft, bottomRight, topLeft, topRight } = cornersxx(width, height)

  ctx.moveTo(...topLeft)
  ctx.arcTo(...bottomLeft, ...bottomRight, radius)
  ctx.lineTo(...bottomLeft)
  ctx.lineTo(...topLeft)
}

function bottomRight(ctx, width, height, radius) {
  const { bottomLeft, bottomRight, topLeft, topRight } = cornersxx(width, height)
  ctx.moveTo(...topRight)
  ctx.arcTo(...bottomRight, ...bottomLeft, radius)
  ctx.lineTo(...bottomRight)
  ctx.lineTo(...topRight)
}

function topLeft(ctx, width, height, radius) {
  const { bottomLeft, bottomRight, topLeft, topRight } = cornersxx(width, height)
  ctx.moveTo(...bottomLeft)
  ctx.arcTo(...topLeft, ...topRight, radius)
  ctx.lineTo(...topLeft)
  ctx.lineTo(...bottomLeft)
}

function topRight(ctx, width, height, radius) {
  const { bottomLeft, bottomRight, topLeft, topRight } = cornersxx(width, height)
  ctx.moveTo(...bottomRight)
  ctx.arcTo(...topRight, ...topLeft, radius)
  ctx.lineTo(...topRight)
  ctx.lineTo(...bottomRight)
}

registerPaint('smooth-corners', class {
  static get inputProperties() {
    return [
        '--smooth-corners'
    ]
  }
  paint(ctx, sizes, props) {
    const height = sizes.height
    const width = sizes.width
    const radius = parseInt(props.get('--smooth-corners').toString());

    ctx.beginPath()

    topLeft(ctx, width, height, radius)

    ctx.fill()
    ctx.stroke()
    ctx.closePath()
  }
})
