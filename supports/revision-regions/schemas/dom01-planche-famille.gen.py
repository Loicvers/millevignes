import textwrap,html
N=' '
W=560
out=[]
def esc(s): return html.escape(s,quote=False)
def box(x,y,w,lines,head=None,fill='#faf3e0',stroke='#a8843a',fs=10,lh=13,wrap=None,hc='#5b1a24',pad=7):
    """lines: list of (texte, style) ; retourne hauteur"""
    wrap=wrap or int((w-2*pad)/(fs*0.52))
    rows=[]
    if head:
        for t in textwrap.wrap(head,int((w-2*pad)/(11*0.55))): rows.append((t,'h'))
    for t,st in lines:
        for i,l in enumerate(textwrap.wrap(t,wrap)): rows.append((l,st))
    h=pad*2+len(rows)*lh+ (2 if head else 0)
    out.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="6" fill="{fill}" stroke="{stroke}"/>')
    yy=y+pad+10
    for t,st in rows:
        if st=='h': out.append(f'<text x="{x+pad}" y="{yy}" font-weight="700" font-size="11" fill="{hc}">{esc(t)}</text>'); yy+=lh+1
        elif st=='i': out.append(f'<text x="{x+pad}" y="{yy}" font-size="{fs-0.5}" font-style="italic" fill="#625a4e">{esc(t)}</text>'); yy+=lh
        elif st=='b': out.append(f'<text x="{x+pad}" y="{yy}" font-size="{fs}" font-weight="700">{esc(t)}</text>'); yy+=lh
        else: out.append(f'<text x="{x+pad}" y="{yy}" font-size="{fs}">{esc(t)}</text>'); yy+=lh
    return h
def line(x1,y1,x2,y2,dash=False,col='#625a4e'):
    out.append(f'<path d="M{x1} {y1} L{x2} {y2}" stroke="{col}" stroke-width="1.4" fill="none"{" stroke-dasharray=\"4 3\"" if dash else ""}/>')
def elbow(x1,y1,x2,y2):
    my=(y1+y2)/2; out.append(f'<path d="M{x1} {y1} V{my} H{x2} V{y2}" stroke="#625a4e" stroke-width="1.4" fill="none"/>')

# Niveau 1
h=box(170,6,220,[("16 genres (Wen et al., 2018), 17 pour le livre",''),("apparue vers 100 millions d'années selon le livre",'i')],head="Famille des Vitacées",fill='#f3e3e3',stroke='#5b1a24')
y1=6+h
hA=box(10,y1+34,170,[("dont la vigne vierge : une cousine, d'un autre genre",'')],head="Les autres genres",fill='#fff',stroke='#d8d0c2')
hV=box(250,y1+34,300,[("une soixantaine d'espèces selon les flores, 83 dans la base POWO : le décompte varie selon les auteurs",'')],head="Genre Vitis",fill='#f3e3e3',stroke='#5b1a24')
elbow(280,y1,95,y1+34); elbow(280,y1,400,y1+34)
y2=y1+34+max(hA,hV)
# sous-genres
yS=y2+34
hM=box(10,yS,220,[("genre à part pour certains auteurs",'i'),("sud-est des États-Unis ; espèce phare : M. rotundifolia, la muscadine",''),("résiste au nématode du court-noué : porte-greffe O39-16",''),("donne les gènes Run1 et Rpv1 des variétés résistantes",'')],head="Sous-genre Muscadinia (2n"+N+"="+N+"40)",fill='#eef2f5',stroke='#456e8a',hc='#456e8a')
hE=box(300,yS,250,[("la « vraie » vigne, de loin le plus important ; ses espèces se répartissent en trois bassins",'')],head="Sous-genre Euvitis (2n"+N+"="+N+"38)",fill='#f3e3e3',stroke='#5b1a24')
elbow(400,y2,120,yS); elbow(400,y2,425,yS)
line(230,yS+40,300,yS+40,dash=True,col='#456e8a')
out.append(f'<text x="265" y="{yS+56}" text-anchor="middle" font-size="8.5" font-style="italic" fill="#456e8a">croisements</text><text x="265" y="{yS+67}" text-anchor="middle" font-size="8.5" font-style="italic" fill="#456e8a">presque stériles</text><text x="265" y="{yS+78}" text-anchor="middle" font-size="8.5" font-style="italic" fill="#456e8a">(2n = 39)</text>')
y3=yS+max(hM,hE)
# bassins
yB=y3+40
cols=[(8,178),(194,172),(374,178)]
xs=[c[0]+c[1]//2 for c in cols]
for xc in xs: pass
out.append(f'<path d="M425 {yS+hE} V{yB-16} M{xs[0]} {yB} V{yB-16} H{xs[2]} V{yB} M{xs[1]} {yB-16} V{yB}" stroke="#625a4e" stroke-width="1.4" fill="none"/>')
hb=[]
hb.append(box(cols[0][0],yB,cols[0][1],[("34 espèces selon le livre ; apport : les résistances",'i'),("V. riparia et V. rupestris : sols plutôt acides",''),("V. berlandieri : Texas, sols calcaires ; se greffe et s'enracine mal",''),("V. labrusca : le concord, longtemps cru pur, a environ un quart à un tiers de vinifera",'')],head="Amérique du Nord"))
hb.append(box(cols[1][0],yB,cols[1][1],[("37 espèces pour le livre (Chine seule) ; apport : le froid",'i'),("V. amurensis : bassin de l'Amour, entre Russie et Chine ; l'espèce la plus résistante au froid",'')],head="Asie orientale"))
hb.append(box(cols[2][0],yB,cols[2][1],[("une seule espèce ; apport : le vin",'i'),("V. vinifera",'b'),("subsp. sylvestris : la lambrusque, sauvage, typiquement dioïque, protégée en France depuis 1995",''),("subsp. vinifera (sativa dans le livre) : cultivée, typiquement hermaphrodite",'')],head="Europe et Proche-Orient"))
y4=yB+max(hb)
# résultats
yR=y4+30
for i,xc in enumerate(xs): line(xc,yB+hb[i],xc,yR)
hr=[]
hr.append(box(cols[0][0],yR,cols[0][1],[("3309 C, 101-14 : riparia × rupestris",''),("SO4, 161-49 : berlandieri × riparia",''),("110 R, 140 Ru, 1103 P : berlandieri × rupestris",''),("41 B : berlandieri × chasselas",'')],head="Les porte-greffes",fill='#fff',stroke='#a8843a',hc='#a8843a'))
hr.append(box(cols[1][0],yR,cols[1][1],[("croisés avec vinifera : rondo, solaris, cabernet severny",'')],head="Des cépages du froid",fill='#fff',stroke='#a8843a',hc='#a8843a'))
hr.append(box(cols[2][0],yR,cols[2][1],[("la domestication de la forme cultivée a fait naître des milliers de cépages",'')],head="Les cépages du vin",fill='#fff',stroke='#a8843a',hc='#a8843a'))
y5=yR+max(hr)+22
out.append(f'<text x="280" y="{y5}" text-anchor="middle" font-size="9.5" fill="#625a4e" font-style="italic">Les nombres d\'espèces varient selon les auteurs : Wan et al. (2013) en comptent jusqu\'à 30</text><text x="280" y="{y5+13}" text-anchor="middle" font-size="9.5" fill="#625a4e" font-style="italic">en Asie orientale et 28 en Amérique du Nord avec le Mexique.</text>')
H=y5+20
svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="Inter, sans-serif" fill="#1a1612">'+''.join(out)+'</svg>'
open('/home/claude/millevignes/supports/revision-regions/schemas/dom01-planche-famille.svg','w',encoding='utf-8').write(svg)
print(H)
