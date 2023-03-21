---
title: "IND-CPA PKE without Compression"
metaTitle: "Syntax High this page"
metaDescription: "This is the mescription for this page"
---
## Construction

* KeyGen():

$$
\begin{array}{ll}
&  A \leftarrow R^{k\times k}_{q} \\
&  (s, e)\leftarrow\beta^{k}_{\eta}\times\beta^{k}_{\eta} \\
&  pk =(A,t=As+e) \\
&  sk =s\\

&  return (pk, sk)
\end{array}

$$

* Enc(pk, m):

$$
\begin{array}{ll}

&      (r, e_1, e_2) \leftarrow\beta^{k}_{\eta}\times\beta^{k}_{\eta}\times\beta_{\eta} \\


&      \begin{bmatrix}
                & u &  \\
                & v &  \\
      \end{bmatrix} =

      \begin{bmatrix}
                & A^{T} &  \\
                & t^{T} &  \\
      \end{bmatrix}

      \begin{bmatrix}
        r
      \end{bmatrix} +

      \begin{bmatrix}
                & e_1 &  \\
                & e_2 &  \\
      \end{bmatrix} +

      \begin{bmatrix}
                & 0 &  \\
                & m\cdot\frac{q}{2} &  \\
      \end{bmatrix} \\

&      return (u, v)


\end{array}

$$

* Dec(sk=s, c=(u, v)):

for each coefficients in $v - s^{T}u$ :
decode to

$$
\begin{cases}
          1, & \text{if it is closer to q/2} \\
          0, & \text{otherwise}
        \end{cases}

$$

## Correctness

In decryption algorithm Dec,
we have

$$
v - s^{T}u = \\
             = \\

$$

## Security

Consider encryption algorithm Enc,by first applying k-dim MLWE we have

$$
\begin{bmatrix}
          & A^{T} &  \\
          & t^{T} &  \\
\end{bmatrix} {\approx}_c
\begin{bmatrix}
          & A^{T} &  \\
          & u^{T} &  \\
\end{bmatrix}
= \begin{bmatrix}
          & U &  \\
\end{bmatrix}
\text{,where u}\leftarrow R^{k}_{q} \text{; } U \leftarrow R^{(k+1)\times k}_{q} \\

$$

Now the encryption becomes

$$
\begin{bmatrix}
                & U &
      \end{bmatrix}

      \begin{bmatrix}
        r
      \end{bmatrix} +

      \begin{bmatrix}
                & e_1 &  \\
                & e_2 &  \\
      \end{bmatrix} +

      \begin{bmatrix}
                & 0 &  \\
                & m\cdot\frac{q}{2} &  \\
      \end{bmatrix} \\

$$

Applying (k+1)-dim MLWE assumption,

$$
\begin{bmatrix}
          & U &
\end{bmatrix}

\begin{bmatrix}
  r
\end{bmatrix} +

\begin{bmatrix}
          & e_1 &  \\
          & e_2 &  \\
\end{bmatrix} {\approx}_c
\begin{bmatrix}
          & U' &
\end{bmatrix}
\text{,where } U' \leftarrow R^{(k+1)\times k}_{q}

$$

Then the encryption becomes

$$
\begin{bmatrix}
  U'
\end{bmatrix} +
\begin{bmatrix}
          & 0 &  \\
          & m\cdot\frac{q}{2} &  \\
\end{bmatrix} \\

$$

which is uniformly random and independent of the plaintext. Thus, the encryption achieves IND-CPA security.
