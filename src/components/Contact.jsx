import emailjs from 'emailjs-com';
import './Contact.css';

const email = 'yokeshwaran11102002@gmail.com';
const phone = '6379854154';
const locationUrl = 'https://www.google.com/maps/search/Ambur+635802';
const locationText = 'Ambur - 635802';

export function Contact() {

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            'service_b5nn4ao',      // your Service ID
            'template_wmtlvca',    // paste Template ID
            e.target,
            'LsqvhAgVCXeRSeMLn'      // paste Public Key
        )
            .then(() => {
                alert('Message sent successfully!');
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to send message');
            });

        e.target.reset();
    };

    return (
        <section id="contact" className="contact">
            <h1 className="contact-title">Contact Me</h1>

            <div className="contact-container">

                {/* LEFT SIDE */}
                <div className="information">
                    <h2>Contact Information</h2>

                    <a href={`mailto:${email}`}>
                        <i className="fa-solid fa-envelope"></i>
                        <span>{email}</span>
                    </a>

                    <a href={`tel:${phone}`}>
                        <i className="fa-solid fa-phone"></i>
                        <span>{phone}</span>
                    </a>

                    <a href={locationUrl} target="_blank" rel="noopener noreferrer">
                        <i className="fa-solid fa-location-dot"></i>
                        <span>{locationText}</span>
                    </a>
                </div>

                {/* RIGHT SIDE FORM */}
                <div className="send-me-message">
                    <form onSubmit={sendEmail}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Name:</td>
                                    <td>
                                        <input type="text" name="name" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Email:</td>
                                    <td>
                                        <input type="email" name="email" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Subject:</td>
                                    <td>
                                        <input type="text" name="subject" required />
                                    </td>
                                </tr>

                                <tr>
                                    <td>Message:</td>
                                    <td>
                                        <textarea name="message" required></textarea>
                                    </td>
                                </tr>

                                <tr>
                                    <td></td>
                                    <td>
                                        <button type="submit">Send</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>

            </div>
        </section>
    );
}
