(function () {

    /* Waveform */
    var dancerWave = new Dancer('songs/tonetest', [ 'ogg', 'mp3' ]);

    dancerWave.waveform( document.getElementById('waveform'), {
        strokeStyle: '#666',
        strokeWidth: 2
    });

    document.getElementById('waveform-btn').addEventListener( 'click', function () {
        dancerWave.isLoaded() && !dancerWave.isPlaying() ?
            dancerWave.play() :
            dancerWave.stop() ;
    });

    var dancerWave2 = new Dancer('songs/zircon_devils_spirit', [ 'ogg', 'mp3' ]);

    dancerWave2.waveform( document.getElementById('waveform2'), {
        strokeStyle: '#666',
        strokeWidth: 2
    });

    document.getElementById('waveform2-btn').addEventListener( 'click', function () {
        dancerWave2.isLoaded() && !dancerWave2.isPlaying() ?
            dancerWave2.play() :
            dancerWave2.stop() ;
    });

    /* FFT */
    var dancerFFT = new Dancer('songs/zircon_devils_spirit', [ 'ogg', 'mp3' ]);

    dancerFFT.fft( document.getElementById('fft'), {
        fillStyle: '#666',
        width: 2
    });

    document.getElementById('fft-btn').addEventListener( 'click', function () {
        dancerFFT.isLoaded() && !dancerFFT.isPlaying() ?
            dancerFFT.play() :
            dancerFFT.stop() ;
    });

    /* Beat */
    var
      beatCanvas = document.getElementById('beat'),
      beatCtx = beatCanvas.getContext('2d'),
      dancerBeat = new Dancer('songs/anosou_ffvi', [ 'ogg', 'mp3' ]), beat;

    beat = dancerBeat.createBeat({
        frequency: [ 0, 10 ],
        threshold: 0.25,
        decay: 0.03,
        onBeat: function () {
            beatCtx.fillStyle = '#ff0077';
        },
        offBeat: function () {
            beatCtx.fillStyle = '#666';
        }
    }).on();
    
    dancerBeat.fft( beatCanvas, {
        fillStyle: '#666',
        width: 10
    });

    document.getElementById('beat-btn').addEventListener( 'click', function () {
        dancerBeat.isLoaded() && !dancerBeat.isPlaying() ?
            dancerBeat.play() :
            dancerBeat.stop() ;
    });
})();
