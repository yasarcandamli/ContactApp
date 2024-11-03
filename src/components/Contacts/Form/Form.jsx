import { useEffect, useState } from 'react'

function Form({ addContact, contacts }) {
    const initialFormValues = { full_name: '', phone_number: '' };
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

    const handleChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (form.full_name === '' || form.phone_number === '') {
            return false;
        }

        addContact([...contacts, form]);
    }

    return (
        <form className='Form' onSubmit={handleSubmit}>
            <div>
                <input
                    onChange={handleChangeInput}
                    name='full_name'
                    value={form.full_name}
                    placeholder='Full Name'
                />
            </div>
            <div>
                <input
                    onChange={handleChangeInput}
                    name='phone_number'
                    value={form.phone_number}
                    placeholder='Phone Number'
                />
            </div>
            <div>
                <button onClick={handleSubmit}>Add</button>
            </div>
        </form>
    )
}

export default Form
