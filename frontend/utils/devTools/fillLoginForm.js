export async function fillLoginForm(user) {
    const randomNumber = user === 'newUser' ? Math.round(Math.random() * 1000) : 1;

    const fields = [
        user === 'newUser' && { id: 'name', value: 'Ben' },
        { id: 'email', value: 'benmcl@shaw.ca' },
        { id: 'password', value: 'benmcl@shaw.ca' },
        user === 'newUser' && { id: 'confirmPassword', value: 'benmcl@shaw.ca' }
    ].filter((d) => d);

    function setNativeValue(element, value) {
        element.focus();
        const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
        const prototype = Object.getPrototypeOf(element);
        const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;

        if (valueSetter && valueSetter !== prototypeValueSetter) {
            prototypeValueSetter.call(element, value);
        } else {
            valueSetter.call(element, value);
        }
    }

    for (let i = 0; i < fields.length; i++) {
        const input = document.getElementById(fields[i].id);
        setNativeValue(input, fields[i].value + randomNumber);
        await input.dispatchEvent(new Event('input', { bubbles: true }));
    }
}
