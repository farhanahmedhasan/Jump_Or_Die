class JumpMan {
    constructor() {
        this.wholePage = document.querySelector('html')
        this.character = document.getElementById('character')
        this.block = document.getElementById('block')
        setInterval(() => this.mIdead(), 10)
        this.events()
    }

    events() {
        this.wholePage.addEventListener('keyup', (press) => {
            this.jump(press)
        })    
    }

    jump(press) {
        const keyName = press.key
        if (keyName === 'ArrowUp') {
            this.character.classList.add('animate')
        }
        setTimeout(() => {
            if (this.character.classList == 'animate') {
                this.character.classList.remove('animate')
            }
            
        }, 500)
        
    }

    mIdead() {
        const charBottom = parseInt(window.getComputedStyle(this.character).getPropertyValue('bottom'))
        console.log('charBottom: '+charBottom)
        const blockLeft = parseInt(window.getComputedStyle(this.block).getPropertyValue('left'))
        console.log('blockLeft:' + blockLeft)
        
        if (blockLeft < 50 && blockLeft > 0) {
            this.block.style.animation = 'none'
            this.block.style.display = 'none'
            alert("Phew!! Try Again You nOOb")
        }
    }

}
new JumpMan()