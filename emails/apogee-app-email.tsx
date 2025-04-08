import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const POSTER_ASPECT_RATIO = 1131 / 1600;
const POSTER_WIDTH = 300;
const POSTER_HEIGHT = POSTER_WIDTH / POSTER_ASPECT_RATIO;

export const ApogeeAppEmail = () => (
  <Html>
    <Head>
      {/* <Font
        fontFamily="Roboto"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      /> */}
    </Head>
    <Body style={main}>
      <Container style={container}>
        <Heading as="h1" style={mainHeading}>
          Greetings from the Department of Visual Media!
        </Heading>
        <Section>
          <Text>
            We invite you to take your APOGEE 2025 experience to the next level
            with the official{" "}
            <span style={{ fontWeight: "bold" }}>APOGEE app</span>, available on
            both Android and iOS!
          </Text>
        </Section>
        <Img
          src="https://res.cloudinary.com/dvaxoacih/image/upload/v1743166326/apogeePoster_qp0snv.png"
          // width={POSTER_WIDTH}
          // height={POSTER_HEIGHT}
          alt="APOGEE App Poster"
          style={poster}
        />
        <Section style={features}>
          <Text style={featureText}>
            Exploring the fest is made easier with these useful features of the
            app:
          </Text>
          <Text style={featureText}>
            <span style={{ fontWeight: "bold" }}>Ordering food:</span>{" "}
            Effortlessly order food from the stalls via the app, and skip the
            cash queue by paying via the virtual wallet. Hand over an OTP and
            collect your orders when they're ready. In case of order rejection,
            the amount will be automatically refunded.
          </Text>
          <Text style={featureText}>
            <span style={{ fontWeight: "bold" }}>Split bills:</span> For the
            first time, split the bills of the food you order with your friends
            conveniently, within the app itself.
          </Text>
          <Text style={featureText}>
            <span style={{ fontWeight: "bold" }}>Prof Shows:</span> Secure your
            entry to the Prof Shows with a personalised QR code (access from
            top-right icon on the home page) which will be scanned at the venue
            entrance.
          </Text>
          <Text style={featureText}>
            <span style={{ fontWeight: "bold" }}>Event listings:</span> Stay
            updated and never miss an update when you use the app. View the
            dates, times and venues of the events, and bookmark your favourite
            events so you don't miss anything.
          </Text>
          <Text style={featureText}>
            <span style={{ fontWeight: "bold" }}>Official APOGEE merch:</span>{" "}
            Purchase APOGEE 2025 merch from the app and redeem at the
            merchandise stall by showing your personal QR code.
          </Text>
          <Text style={featureText}>
            <span style={{ fontWeight: "bold" }}>Streamlined payments:</span>{" "}
            You can add funds from your SWD account to the virtual wallet, to
            easily make payments throughout the fest. Transfer money to your
            BITSian friends by scanning their personal QR codes or entering
            their IDs.
          </Text>
          <Text style={featureText}>
            <span style={{ fontWeight: "bold" }}>Campus map:</span> Locate any
            place on campus, so you can always find your way around during
            APOGEE.
          </Text>
        </Section>
        <Text
          style={{
            textAlign: "left",
            marginBottom: 0,
          }}
        >
          <span style={{ fontWeight: "bold" }}>NOTE:</span> Any remaining
          balance in your wallet at the end of the fest will automatically be
          rolled back to your SWD account. Transferred funds, including funds
          added to your wallet via UPI apps, are non-refundable. All payments
          made through your SWD account will be added as fees at the end of the
          semester.
        </Text>
        <Section>
          <Text style={downloadText}>
            Download the app now and enrich your experience this APOGEE!
          </Text>
          <Button
            style={{
              width: 64,
              padding: "10px 20px",
              backgroundColor: "#1C5EA1",
              borderRadius: 5,
              margin: 8,
              color: "#fff",
            }}
            href="https://bits-apogee.org/android"
          >
            Android
          </Button>
          <Button
            style={{
              width: 64,
              padding: "10px 20px",
              backgroundColor: "#fff",
              borderRadius: 5,
              margin: 8,
              color: "#000",
            }}
            href="https://bits-apogee.org/ios"
          >
            iOS
          </Button>
        </Section>
        <Section style={regardsSection}>
          <Text style={{ margin: 0 }}>Regards,</Text>
          <Text style={regardsText}>Department of Visual Media</Text>
        </Section>
        <Hr style={hr} />
        <Section>
          <Button href="https://bits-apogee.org/" style={footerLinks}>
            <Img
              src="https://res.cloudinary.com/dvaxoacih/image/upload/v1743169349/apogeeLogoOrange_rcq6kn.png"
              alt="apogee website"
              height={20}
              width={20}
            />
          </Button>
          <Button
            href="https://www.instagram.com/bitsapogee/"
            style={footerLinks}
          >
            <Img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="instagram"
              height={20}
              width={20}
            />
          </Button>
          <Button
            href="https://www.linkedin.com/company/apogee-bits-pilani/"
            style={footerLinks}
          >
            <Img
              src="https://static.vecteezy.com/system/resources/previews/016/716/470/non_2x/linkedin-icon-free-png.png"
              alt="linkedin"
              height={20}
              width={20}
            />
          </Button>
          <Button
            href="https://www.youtube.com/@APOGEEBITS"
            style={footerLinks}
          >
            <Img
              src="https://img.freepik.com/premium-vector/youtube-play-button-logo-icon_628407-1685.jpg?semt=ais_hybrid"
              alt="youtube"
              height={20}
              width={20}
            />
          </Button>
          <Text style={{ marginBottom: 0 }}>Made with ❤️ by DVM</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ApogeeAppEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#000",
  margin: "0 auto",
  padding: "20px",
  marginBottom: "64px",
  borderRadius: "10px",
  color: "#ffffff",
  textAlign: "center" as const,
};

const mainHeading = {
  fontSize: "25px",
  lineHeight: "32px",
};

const poster = {
  margin: "16px auto",
  width: "90%",
};

const features = {
  textAlign: "left" as const,
  padding: "0 16px",
};

const featureText = {
  fontSize: "14px",
};

const downloadText = {
  margin: "16px 0 8px 0",
};

const regardsSection = {
  textAlign: "left" as const,
  margin: "16px 0",
  // padding: "0 16px",
};

const regardsText = {
  fontWeight: "bold",
  margin: 0,
};

const hr = {
  borderColor: "#626262",
  margin: "20px 0",
};

const footerLinks = {
  margin: "0 5px",
  color: "#fff",
};
