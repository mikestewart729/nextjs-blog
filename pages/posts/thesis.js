import Head from 'next/head';
import Link from "next/link"
import Layout from "../../components/layout"
import utilStyles from '../../styles/utils.module.css';

export default function ThesisPage() {
    return (
        <Layout>
            <Head>
                <title>Mike's PhD Thesis</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>Mike's PhD Thesis</h1>
                <p>
                    Thesis: <Link href="/DynamicsOfMatterWaveQuantumEmittersInEngineeredReservoirs.pdf" target="_blank">
                        Dynamics of matter wave quantum emitters in engineered reservoirs
                    </Link>
                </p>
                <p>
                    Quantum Mechanics postulates that matter in behaves both wave-like and particle-like at the same time. 
                    This opens up many fascinating observable consequences, among the most exciting of which is quantum computing. 
                    However, quantum systems are "delicate"; any small disturbance to an excited (high energy) quantum state 
                    will tend to cause it to decay to it's ground (lowest energy) state. This is a problem for building devices
                    such as quantum memories, the backbones of any hypothetical quantum computer. In my research, I used theoretical
                    and experimental approaches to study the effects of the environment around a quantum system on its behavior, 
                    and through careful construction of environments of interest, tune the decay behavior. While this work is not 
                    specifically responsible for advances in quantum computing, it indeed reveals something interesting about 
                    quantum mechanical forgetfulness and the ability of systems to "remember" their past. 
                </p>
                <p>
                    In conjunction with the lab of Dr. Dominik Schneble at Stony Brook University, I wrote the following thesis; it 
                    was accepted by the graduate school in late 2020. In recognition of this work, I was awarded a Doctorate degree
                    in Physics. Thank you for reading this far, and if you're ready for a story of lasers, exotic phases of matter,
                    and the surprising influence of background environments on quantum states, I encourage you to click the link above
                    and read my thesis!
                </p>
            </article>
        </Layout>
    )
}