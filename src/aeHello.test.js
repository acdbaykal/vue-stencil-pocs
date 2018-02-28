import {shallow} from 'vue-test-utils'
import AeHello from './aeHello.vue'

describe('aeHello', () => {

    it('renders a ae-hello element', () => {
        const wrapper = shallow(AeHello)
        expect(wrapper.contains('ae-hello'))
    })

    it('renders an h1 element with text when it is added to DOM and processed as a web components', (done) => {
        const wrapper = shallow(AeHello, {
            attachToDocument: true
        })
        setTimeout(() => {
            const aeHello = document.querySelector('h1')
            expect(aeHello.innerHTML).toBeTruthy()
            done();
        }, 500)

    })
})