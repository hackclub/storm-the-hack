import { Box, Button, Card, Container, Grid, Heading, Text, Flex, Image } from 'theme-ui'
import About from '../components/about.mdx'
import Why from '../components/why.mdx'

export default () => (
  <>
    <Container sx={{ textAlign: 'center' }}>
      {/* <Image src="/background.png" />
      <Image src="/poster-front.png" /> */}
      <Image src="/poster-full.png" sx={{ maxHeight: '100vh' }} />
    </Container>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        color: "white",
        backgroundImage: "url(background.png)",
        backgroundSize: "100%",
        // backgroundRepeat: 'no-repeat',
        py: [5, 6]
      }}
    >
      {/* <Box as="header" 
        sx={{ bg: 'sheet', mb: [4, 5] }}>
        <Container sx={{ 
          py: [4, 5]
        }}> */}
      {/* <Heading
            as="h3"
            variant="subtitle"
            sx={{ color: 'red', fontSize: [5, 6, 7], mt: 3 }}
          >
            Attention all Hackers!
        </Heading>
          <Heading
            as="h2"
            variant="subtitle"
            sx={{ color: 'muted', mt: 3, mb: 4, fontFamily: 'body' }}
          >
            Mar 26–30, 2020
        </Heading>
          <Button
            as="a"
            href="https://covid-global-hackathon.devpost.com"
            sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mr: [3, 4] }}
          >
            Register
        </Button>
          <Button
            as="a"
            href="https://join.slack.com/t/globalcovidhackathon/shared_invite/zt-d25lrhkl-UAKmMq4h_zNzCQhqnNsbfw"
            variant="outline"
            sx={{ fontSize: [2, 3], px: [3, 4] }}
          >
            Join Slack
        </Button> */}
      {/* </Container>
      </Box> */}
      <Container sx={{ py: 4 }}>
        <Grid
          columns={[null, null, 2]}
          gap={[3, 4]}
          sx={{
            h2: { mt: 0 },
            p: {
              maxWidth: "copy",
              fontSize: [1, 2],
              ":last-of-type": { mb: 0 }
            }
          }}
        >
          <Card>
            <Heading variant="headline" sx={{ color: "orange" }}>
              Mobilize!
            </Heading>
            <Why />
              <Button
                as="a"
                href="https://hack.af/suitup"
                sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "orange" }}
              >
                SUIT UP
              </Button>
          </Card>
          <Card>
            <Heading variant="headline" sx={{ color: "blue" }}>
              Join the Storm
            </Heading>
            <About />
              <Button
                as="a"
                href="https://hack.af/cgh"
                sx={{ fontSize: [2, 3], py: [3, 3], px: [4, 4], mt: [3, 4], mr: [3, 4], background: "blue" }}
              >
                SUIT UP
              </Button>
          </Card>
        </Grid>
      </Container>
    </Flex>
  </>
);
